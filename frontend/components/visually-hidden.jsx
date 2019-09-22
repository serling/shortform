import React from "react";
import PropTypes from "prop-types";

const VisuallyHidden = ({ children }) =>
  !children ? null : (
    <>
      <span className="visually-hidden">{children}</span>

      <style jsx>{`
        .visually-hidden {
          position: absolute;
          width: 0;
          height: 0;
          left: -999em;
          overflow: hidden;
        }
      `}</style>
    </>
  );

VisuallyHidden.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

export default VisuallyHidden;
