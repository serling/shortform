import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const themes = {
  default: "default"
};

//TODO: help icon with alternate names, description, categories

const Game = ({ theme, title, description }) => {
  return (
    <div
      className={cn("game", {
        [`game--${themes[theme]}`]: themes[theme]
      })}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <style jsx>
        {`
          .game {
          }
        `}
      </style>
    </div>
  );
};

Game.defaultProps = {
  theme: themes.default
};

Game.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Game.themes = themes;

export default Game;
