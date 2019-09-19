export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "pageTitle",
        maxLength: 96
      }
    },
    {
      name: "heading",
      title: "Heading",
      type: "string"
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "highlightedGames",
      title: "Highlighted Games",
      type: "array",
      of: [{ type: "reference", to: { type: "game" } }]
    }
  ],
  preview: {
    select: {
      title: "pageTitle"
    }
  }
};
