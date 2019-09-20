import React from "react";
import PropTypes from "prop-types";
import { urlFor } from "../utilities/client";

const Image = ({ image }) => {
  if (!image) return null;

  const { description } = image;

  return (
    <div className="image">
      <img
        className="image__image"
        src={urlFor(image).url()}
        alt={description}
      />
      <style jsx>{`
        .image {
          margin: 1rem 0;

          &__image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired
};

export default Image;
