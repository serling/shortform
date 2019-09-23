import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Breadcrumbs from "./breadcrumbs";
import FilteredGamesList from "./filtered-games-list";

const CategoryPage = props => {
  const { games, description, title } = props;

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

  return (
    <Layout title={title}>
      <div className="category-page">
        <Content>
          <Breadcrumbs links={breadcrumbs} />
          <h2 className="category-page__heading">{title}</h2>
          <p className="category-page__lead">{description}</p>
        </Content>
        <Content>
          <div className="category-page__list">
            <FilteredGamesList games={games} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .category-page {
          &__heading {
            font-size: 3rem;
          }

          &__lead {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

CategoryPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  games: PropTypes.array.isRequired
};

CategoryPage.defaultProps = {
  games: [],
  title: "Category",
  description: "Category contains following games"
};

export default CategoryPage;
