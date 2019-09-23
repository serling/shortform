import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import { getInitialData } from "../../utilities/api-helper";
import CategoryPage from "../../components/category-page";

const Categories = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <CategoryPage {...data} />;
};

Categories.getInitialProps = async ctx => {
  const { query, req } = ctx;

  const { payload, error } = await getInitialData(
    req,
    "/api/categories",
    query.slug
  );

  return { data: payload, error };
};

Categories.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Categories;
