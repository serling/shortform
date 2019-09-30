import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const themes = {
  small: "small",
  page: "page"
};

const PageLoader = ({ theme }) => (
  <div
    className={cn("page-loader", {
      [`page-loader--${themes[theme]}`]: themes[theme]
    })}
  >
    <style jsx>{`
      .page-loader {
        border: 8px solid #f3f3f3;
        border-top: 8px solid #3498db;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;

        &--page {
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 40px;
        }

        &--small {
          width: 24px;
          height: 24px;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    `}</style>
  </div>
);

PageLoader.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

PageLoader.defaultProps = {
  theme: themes.page
};

PageLoader.themes = themes;

export default PageLoader;
