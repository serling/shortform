import { client } from "../../utilities/client.js";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find front page -- or something"
};

const dataErrorObject = {
  statusCode: 404,
  title: "No response from fetch request"
};

export default async (req, res) => {
  const { query } = req;

  await client
    .fetch(
      `*
    [_type == "page" && slug.current == "front-page"] {
      pageTitle,
      heading,
      highlightedGames[]->{ 
        _id, 
        "slug": slug.current, 
        title, 
        alternateTitles,
        description, 
        categories[]->
      },
      "allGames": *[_type == "game"] {
        _id,
        title,
        alternateTitles,
        description,
        "slug": slug.current,
        categories[]->
      }
    }[0]`
    )
    .then(response => {
      if (response) {
        res.status(200).json({ success: true, payload: response });
        return;
      }

      res.status(404).json({ error: dataErrorObject });
      return;
    })
    .catch(err => {
      console.error("Oh no, error occured: ", err);

      res.status(404).json({ error: fatalErrorObject });
      return;
    });
};
