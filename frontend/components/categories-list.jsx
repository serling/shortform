import React from "react";
import PropTypes from "prop-types";

import Grid from "./grid";
import Category from "./category";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-list">
      <Grid>
        {categories.map(category => {
          const { _id } = category;

          return <Category key={_id} {...category} />;
        })}
      </Grid>
      <style jsx>
        {`
          .categories-list {
            $self: &;
          }
        `}
      </style>
    </div>
  );
};

CategoriesList.defaultProps = {
  categories: []
};

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired
};

export default CategoriesList;
