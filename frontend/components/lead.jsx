import React from "react";
import PropTypes from "prop-types";

const Lead = ({ text }) => {
  return (
    <p className="lead">
      {text}
      <style jsx>{`
        .lead {
          font-size: 1.2rem;
        }
      `}</style>
    </p>
  );
};

Lead.propTypes = {
  text: PropTypes.object.isRequired
};

export default Lead;
