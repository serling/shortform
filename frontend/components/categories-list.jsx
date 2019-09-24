import React from "react";
import PropTypes from "prop-types";

import List from "./list";
import Category from "./category";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-list">
      <List>
        {categories.map(category => {
          const { _id } = category;

          return <Category key={_id} {...category} />;
        })}
      </List>
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
