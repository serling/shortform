import { client } from "../../utilities/client";

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

  //TODO: && isExperimental == true
  await client
    .fetch(
      `*
    [_type == "game" && isExperimental == true]{ 
      _id,
      title,
      description,
      playerCount,
      alternateTitles,
      publishedAt,
      categories[]-> { title, "slug": slug.current },
      "slug": slug.current
    }`
    )
    .then(response => {
      console.log("api call for experiments:", response);

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
