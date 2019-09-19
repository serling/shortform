import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "vhzzgrn0",
  dataset: "production",
  useCdn: false // TODO
});

const builder = imageUrlBuilder(client);

const urlFor = source => {
  return builder.image(source);
};

module.exports = {
  client,
  urlFor
};
