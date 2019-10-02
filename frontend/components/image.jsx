import React from "react";
import PropTypes from "prop-types";
import { urlFor } from "../utilities/client";

const Image = ({ image, alt, height, width }) => {
  if (!image) return null;

  const imageSrc = urlFor(image)
    .size(height, width)
    .url();

  if (!imageSrc) return null;

  const { description } = image;

  return (
    <div className="image">
      <img className="image__image" src={imageSrc} alt={description || alt} />
      <style jsx>{`
        .image {
          &__image {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Image;
