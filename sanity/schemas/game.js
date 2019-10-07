//fields: requiresPreperation
export default {
  name: "game",
  title: "Game",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Name of the game.",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "alternateTitles",
      title: "Alternate titles",
      description: "Games may have different names in different communities.",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      hidden: true,
      options: {
        hotspot: true
      }
    },
    {
      name: "categories",
      title: "Categories",
      description: "Tags we can categorize this game under.",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: Rule => Rule.required()
    },
    {
      name: "isExperimental",
      title: "Improlab",
      description:
        "Experimental. Considered part of the improv lab. Not tested yet.",
      type: "boolean",
      validation: Rule => Rule.required()
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    },
    {
      name: "playerCount",
      title: "Player Count",
      description: "Free text, e.g. '4', '4+', 'Between 4 and 6'",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "difficultyLevel",
      title: "Difficulty Level",
      description: "How complicated is the game to introduce and play?",
      type: "string",
      options: {
        list: [
          { value: "1", title: "Easy" },
          { value: "2", title: "Medium" },
          { value: "3", title: "Hard" }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      description: "A short summary or pitch of the game",
      type: "string"
    },
    {
      name: "setup",
      title: "Setup",
      description: "How do you set up and play this game?",
      type: "blockContent"
    },
    {
      name: "notes",
      title: "Notes",
      description: "Usefull observations made playing this game.",
      type: "blockContent"
    },
    {
      name: "relatedGames",
      title: "Related Games",
      description: "Games that are similar to this one.",
      type: "array",
      of: [{ type: "reference", to: { type: "game" } }]
    }
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
