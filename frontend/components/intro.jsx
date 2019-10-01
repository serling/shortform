import React from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "./breadcrumbs";
import Lead from "./lead";

const Intro = ({ title, lead, breadcrumbs }) => {
  return (
    <div className="intro">
      {breadcrumbs && <Breadcrumbs links={breadcrumbs} />}
      <h1 className="intro__heading">{title}</h1>
      <Lead text={lead} />
      <style jsx>{`
        .intro {
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          &__heading {
            font-size: 1.5rem;
            margin-bottom: 1rem;

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
