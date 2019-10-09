import { client } from "../../../utilities/client.js";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find game -- or something"
};

const dataErrorObject = {
  statusCode: 404,
  title: "No response from fetch request"
};

//TODO: prepwork as model: bool and description for quick overview
//TODO: playerCount as model: number value and text for human readable (array of number values?)
//TODO: rename search param names/models/schemas/etc
//TODO: exercises tab

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
      "isExperimental": coalesce(isExperimental, false, true),
      relatedGames[]->{ 
        _id, 
        "slug": slug.current, 
        title, 
        alternateTitles,
        "isExperimental": coalesce(isExperimental, false, true),
        description, 
        categories[]->
      },
      setup,
      "lastUpdated": _updatedAt,
      notes,
      categories[]-> { title, "slug": slug.current }
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
