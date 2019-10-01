import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  default: "default"
};

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const LANG = "no-NB";

const FormattedDate = ({ theme, dateString, text }) => {
  const date = new Date(dateString);

  return (
    <time
      dateTime={dateString}
      className={cn("formatted-date", {
        [`formatted-date--${themes[theme]}`]: themes[theme]
      })}
    >
      {text && <span className="formatted-date__text">{text}</span>}
      <span className="formatted-date__date">
        {date.toLocaleDateString(LANG, dateOptions)}
      </span>

      <style jsx>
        {`
          .formatted-date {
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px

            &__text {
              margin-right: 0.5em;
            }

            &__date {
              display: block;
            }
          }
        `}
      </style>
    </time>
  );
};

FormattedDate.defaultProps = {
  theme: themes.default
};

FormattedDate.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  text: PropTypes.string,
  dateString: PropTypes.string.isRequired
};

FormattedDate.themes = themes;

export default FormattedDate;
