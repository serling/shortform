import React from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "./breadcrumbs";
import Lead from "./lead";
import Image from "./image";

const Intro = ({ title, lead, breadcrumbs, image }) => {
  return (
    <div className="intro">
      <Breadcrumbs links={breadcrumbs} />
      <div className="intro__top">
        {image && image.asset && (
          <div className="intro__image">
            <Image image={image} alt="image icon for category" />
          </div>
        )}
        <div className="intro__text">
          <h1 className="intro__heading">{title}</h1>
          <Lead text={lead} />
        </div>
      </div>
      <style jsx>{`
        .intro {
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          &__top {
            @media screen and (min-width: $break-at-md) {
              display: flex;
              align-items: center;
            }
          }

          &__text {
          }

          &__image {
            flex: 0 0 15%;
            max-width: 33.333%;
            display: none;

            @media screen and (min-width: $break-at-sm) {
              margin-right: 1rem;
              display: block;
            }
          }

          &__heading {
            font-size: 1.5rem;
            flex: 0 0 100%;

            @media screen and (min-width: $break-at-sm) {
              font-size: 2rem;
            }

            @media screen and (min-width: $break-at-md) {
              font-size: 3rem;
            }
          }
        }
      `}</style>
    </div>
  );
};

Intro.propTypes = {
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  breadcrumbs: PropTypes.array
};

export default Intro;
