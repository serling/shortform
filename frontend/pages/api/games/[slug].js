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
    [_type == "game" && slug.current == "${query.slug}"] { 
      title,
      description,
      playerCount,
      alternateTitles,
      setup,
      publishedAt,
      notes,
      categories[]-> { title, "slug": slug.current },
    }[0]`
    )
    .then(response => {
      console.log("found game!!", response);

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
