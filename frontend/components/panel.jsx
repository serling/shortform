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
          box-shadow: 2px 2px 5px 0px black;
          border-radius: 0.2rem;
          background-color: white;
          padding: 1.5rem;

          &--float {
            float: right;
            width: 40%;
            margin: 0 0 0.5rem 1rem;
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
