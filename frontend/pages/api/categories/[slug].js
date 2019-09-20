import { client } from "../../../utilities/client.js";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find category -- or something"
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
    [_type == "game" && "${query.slug}" in categories[]->slug.current] { 
        _id, 
        "slug": slug.current, 
        title, 
        alternateTitles,
        description, 
        categories[]->

    }`
    )
    .then(response => {
      console.log("found category!!", response);

      if (response) {
        res.status(200).json({ success: true, payload: { games: response } });
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
