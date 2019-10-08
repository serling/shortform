import { client } from "../../utilities/client";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find search string -- or something"
};

const dataErrorObject = {
  statusCode: 404,
  title: "No response from fetch request"
};

const getGamesQuery = (q, lab, audience, players, complexity, preperation) => {
  let string = `_type == "game"`;

  if (q) string = string.concat(` && [title, description] match "${q}*"`);

  if (lab) string = string.concat(` && isExperimental == false`);

  if (preperation) string = string.concat(` && isPreperation == false`);

  if (audience)
    string = string.concat(
      ` && "audience-participation" in categories[]->slug.current`
    );

  if (players) string = string.concat(` && playerCount match "*${players}*"`);

  if (complexity)
    string = string.concat(` && complexityLevel->value <= ${complexity}`);

  console.log("query:", string);

  return string;
};

export default async (req, res) => {
  const { query } = req;

  const { q, lab, audience, players, complexity, preperation } = query;

  await client
    .fetch(
      `* 
      [${getGamesQuery(q, lab, audience, players, complexity, preperation)}]{
        _id, 
        title,
        description,
        playerCount,
        complexityLevel->{value},
        "slug": slug.current,
        alternateTitles,
        isExperimental,
        "lastUpdated": _updatedAt,
        categories[]-> { title, "slug": slug.current }
      }`
    )
    .then(response => {
      // console.log(response);
      if (response) {
        res.status(200).json({
          success: true,
          payload: {
            games: response,
            queryValues: {
              defaultSearchValue: q || "",
              defaultIsExperimental: lab || "",
              defaultIsAudience: audience || "",
              defaultPlayerCount: players || "0",
              defaultComplexityLevel: complexity || "0"
            }
          }
        });
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
