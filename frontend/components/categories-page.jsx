import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/categories-page";

import Layout from "./layout";
import Content from "./content";
import Intro from "./intro";
import Image from "./image";
import CategoriesList from "./categories-list";

const CategoriesPage = props => {
  const { categories, image } = props;
  const { title, description } = phrases;

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
  categories: PropTypes.array.isRequired
};

CategoriesPage.defaultProps = {
  categories: []
};

export default CategoriesPage;
