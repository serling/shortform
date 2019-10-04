import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/category-page";

import Layout from "./layout";
import Content from "./content";
import Intro from "./intro";
import FilteredGamesList from "./filtered-games-list";

const breadcrumbs = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Categories",
    href: "/categories"
  }
];

const CategoryPage = props => {
  const { games, image, title, description } = props;
  const { lead, searchPhrases } = phrases;

  return (
    <Layout title={title}>
      <div className="category-page">
        <Content>
          <Intro
            breadcrumbs={breadcrumbs}
            title={title}
            lead={description}
            image={image}
          />
        </Content>
        <Content>
          <p className="category-page__lead">{lead}</p>
          <div className="category-page__list">
            <FilteredGamesList games={games} phrases={searchPhrases} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .category-page {
          padding-top: 2rem;

          &__lead {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  );
};

CategoryPage.propTypes = {
  games: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

CategoryPage.defaultProps = {
  games: []
};

export default CategoryPage;
