import { client } from "../../utilities/client";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find search string -- or something"
};

const dataErrorObject = {
  statusCode: 404,
  title: "No response from fetch request"
};

const getCategoriesQuery = q => {
  let string = `_type == "category" && [title, description] match "${q}*"`;

  return string;
};

const getGamesQuery = (q, lab, audience, players) => {
  let string = `_type == "game"`;

  if (q) string = string.concat(`&& [title, description] match "${q}*"`);

  if (lab) string = string.concat(` && isExperimental`);

  if (audience)
    string = string.concat(
      ` && "audience-participation" in categories[]->slug.current`
    );

  if (players) string = string.concat(` && playerCount == "${players}"`);

  console.log(string);

  return string;
};

export default async (req, res) => {
  const { query } = req;

  const { q, lab, audience } = query;

  await client
    .fetch(
      `* 
     []{
        "queryValues": {
          "defaultSearchValue": "${q ? q : ""}",
          "defaultIsExperimental": "${!!lab ? true : ""}",
          "defaultIsAudience": "${!!audience ? true : ""}",
          },
         "games": *[${getGamesQuery(q, lab, audience)}]
         {
            _id, 
            title,
            description,
            playerCount,
            "slug": slug.current,
            alternateTitles,
            isExperimental,
            "lastUpdated": _updatedAt,
            categories[]-> { title, "slug": slug.current },  
         },
         "categories": *[${getCategoriesQuery(q)}]
         {
            _id,
            title,
            image,
            description,
            "slug": slug.current   
         }
     }[0]`
    )
    .then(response => {
      if (response) {
        res.status(200).json({ success: true, payload: response });
        return;
      }

      res.status(404).json({ success: false, error: dataErrorObject });
      return;
    })
    .catch(err => {
      console.error("Oh no, error occured: ", err);

      res.status(404).json({ success: false, error: fatalErrorObject });
      return;
    });
};
