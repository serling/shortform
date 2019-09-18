import { client } from "../../../utilities/client.js";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find game -- or something"
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
    [_type == "game" && slug.current == "${query.slug}"] { }[0]`
    )
    .then(response => {
      console.log(response);
      if (response) res.status(200).json({ success: true, payload: response });

      res.status(404).json({ error: dataErrorObject });
    })
    .catch(err => {
      console.error("Oh no, error occured: ", err);
      res.status(404).json({ error: fatalErrorObject });
    });
};
