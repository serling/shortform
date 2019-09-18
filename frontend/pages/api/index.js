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
    [_type == "page" && title == "home"]{}[0]`
    )
    .then(response => {
      if (response) res.status(200).json({ success: true, payload: response });

      res.status(404).json({ error: dataErrorObject });
    })
    .catch(err => {
      console.error("Oh no, error occured: ", err);
      res.status(404).json({ error: fatalErrorObject });
    });
};
