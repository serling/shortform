import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import List from "./list";
import Link from "./link";
import ButtonWithModal from "./button-with-modal";

const themes = {
  default: "default"
};

const Category = ({ title, slug, description }) => {
  return (
    <div className={cn("game", {})}>
      <div className="category__header">
        <h2 className="category__title">
          <Link href={`/categories/${slug}`}>{title}</Link>
        </h2>
      </div>
      <p className="category__description">{description}</p>
      <style jsx>
        {`
          .game {
            &__header {
              display: flex;
              align-items: center;
            }

            &__title {
              font-size: 1.2rem;
            }

            &__description {
            }
          }
        `}
      </style>
    </div>
  );
};

Category.defaultProps = {
  theme: themes.default
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

Category.themes = themes;

export default Category;
