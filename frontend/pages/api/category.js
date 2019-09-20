import { client } from "../../utilities/client";

///api/category?slug=slug-title

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
    [_type == "category" && slug.current == "${query.slug}"][0]`
    )
    .then(response => {
      console.log("api call for category:", response);

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
