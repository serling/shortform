import { client } from "../../../utilities/client";

const fatalErrorObject = {
  statusCode: 404,
  title: "Could not find search string -- or something"
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
     []{
         "games": *[_type == "game" && [title, description] match "${query.query}*"]
         {
            _id, 
            title,
            description,
            playerCount,
            "slug": slug.current,
            alternateTitles,
            isExperimental,
            "lastUpdated": _updatedAt,
            categories[]-> { title, "slug": slug.current },  
         },
         "categories": *[_type == "category" && [title, description] match "${query.query}*"]
         {
            _id,
            title,
            image,
            description,
            "slug": slug.current   
         }
     }[0]`
    )
    .then(response => {
      console.log("after a search:", query, response);
      if (response) {
        res.status(200).json({ success: true, payload: response });
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
