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

  //TODO: fix this query so data is nested in a "games" property
  await client
    .fetch(
      `*
      [_type == "category" && slug.current == "${query.slug}"]
      { 
        title,
        description,
        "games": *[_type == "game" && "${query.slug}" in categories[]->slug.current] {
          _id, 
          "slug": slug.current,
          title, 
          playerCount,
          isExperimental,
          alternateTitles,
          description, 
          categories[]->
        },
    }[0]`
    )
    .then(response => {
      console.log(response);
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
