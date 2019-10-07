import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const themes = {
  small: "small",
  page: "page"
};

const PageLoader = ({ theme, isActive }) => {
  if (!isActive) return null;

  return (
    <span
      className={cn("page-loader", {
        [`page-loader--${themes[theme]}`]: themes[theme]
      })}
    >
      <span className="page-loader__spinner" />
      <style jsx>{`
        .page-loader {
          $self: &;

          &__spinner {
            border: 8px solid #f3f3f3;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
            display: block;
          }

          &--page {
            background-color: rgba(255, 255, 255, 0.8);
            width: 100%;
            height: 100%;
            position: absolute;

            #{$self}__spinner {
              position: absolute;
              left: 50%;
              top: 50%;
              margin-left: auto;
              margin-right: auto;
              margin-top: 40px;
            }
          }

          &--small {
            #{$self}__spinner {
              width: 24px;
              height: 24px;
            }
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
    </span>
  );
};

PageLoader.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  isActive: PropTypes.bool
};

PageLoader.defaultProps = {
  theme: themes.page
};

PageLoader.themes = themes;

export default PageLoader;
