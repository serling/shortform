import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const Panel = ({ children, isFloated }) => {
  return (
    <>
      <div className={cn("panel", { "panel--float": isFloated })}>
        {children}
      </div>
      <style jsx>{`
        .panel {
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          box-shadow: 3px 3px 20px 0px #aca9a9;
          border-radius: 0.2rem;
          background-color: white;
          padding: 1.5rem;

          &--float {
            margin: 1rem 0;

            @media screen and (min-width: $break-at-sm) {
              float: right;
              width: 40%;
              margin: 0 0 0.5rem 1rem;
            }
          }
        }
      `}</style>
    </>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired
};

export default Panel;
