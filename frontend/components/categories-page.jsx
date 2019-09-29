import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Intro from "./intro";
import Image from "./image";
import CategoriesList from "./categories-list";

const CategoriesPage = props => {
  const { categories, title, description, image } = props;

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
          <Intro breadcrumbs={breadcrumbs} title={title} lead={description} />
          {image && <Image image={image} />}
        </Content>
        <Content>
          <div className="categories-page__list">
            <CategoriesList categories={categories} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .categories-page {
          padding-top: 2rem;

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
  description:
    "Every game we've catalogued fits one or more categories. You can browse those games using the category links below."
};

export default CategoriesPage;
