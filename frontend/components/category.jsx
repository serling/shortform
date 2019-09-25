import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Link from "./link";
import Image from "./image";

const themes = {
  default: "default"
};

const Category = ({ title, slug, description, theme, image }) => {
  return (
    <a
      href={`/categories/${slug}`}
      className={cn("category", {
        [`category--${themes[theme]}`]: themes[theme]
      })}
    >
      <div className="category__header">
        <div className="category__image">
          {image && <Image image={image} alt="category icon" />}
        </div>
        <h2 className="category__title">{title}</h2>
      </div>
      <p className="category__description">{description}</p>
      <style jsx>
        {`
          .category {
            $self: &;

            &__header {
              display: flex;
              align-items: center;
              flex-direction: column;
            }

            &__image {
              width: 50px;
            }

            &__title {
              font-size: 1.2rem;
              border-bottom: 2px solid transparent;
            }

            &__description {
              text-align: center;
            }

            &:hover {
              #{$self}__title {
                border-bottom: 2px solid black;
              }
            }
          }
        `}
      </style>
    </a>
  );
};

Category.defaultProps = {
  theme: themes.default
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object
};

Category.themes = themes;

export default Category;
