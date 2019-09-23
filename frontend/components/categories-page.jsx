import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Breadcrumbs from "./breadcrumbs";
import CategoriesList from "./categories-list";

const CategoriesPage = props => {
  const { categories, title, description } = props;

  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    }
  ];

  return (
    <Layout title={title}>
      <div className="categories-page">
        <Content>
          <Breadcrumbs links={breadcrumbs} />
          <h2 className="categories-page__heading">{title}</h2>
          <p className="categories-page__lead">{description}</p>
        </Content>
        <Content>
          <div className="categories-page__list">
            <CategoriesList categories={categories} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .categories-page {
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

CategoriesPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  categories: PropTypes.array.isRequired
};

CategoriesPage.defaultProps = {
  categories: [],
  title: "Categories",
  description: "A list of all the categories"
};

export default CategoriesPage;
