import { client } from "../../utilities/client";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find search string -- or something"
};

const dataErrorObject = {
  statusCode: 404,
  title: "No response from fetch request"
};

const searchQuery = (q, lab, audience) => {
  let string = [
    `_type == "game"`,
    q && `[title, description] match "${q}*"`
  ].join(" && ");

  if (lab) string = string.concat(` && isExperimental`);

  if (audience)
    string = string.concat(
      ` && "audience-participation" in categories[]->slug.current`
    );

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
         "games": *[${searchQuery(q, lab, audience)}]
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
         "categories": *[_type == "category" && [title, description] match "${q}*"]
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
