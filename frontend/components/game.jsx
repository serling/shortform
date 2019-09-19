import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import List from "./list";

const themes = {
  default: "default"
};

const Game = ({ theme, title, slug, description, alternateTitles }) => {
  return (
    <div
      className={cn("game", {
        [`game--${themes[theme]}`]: themes[theme]
      })}
    >
      <div className="game__titles">
        <h2 className="game__title">
          <a href={`/games/${slug}`}>{title}</a>
        </h2>
        <div className="game__alternate-titles">
          {alternateTitles && (
            <List isInline={true}>{alternateTitles.map(title => title)}</List>
          )}
        </div>
      </div>
      <p className="game__description">{description}</p>
      <style jsx>
        {`
          .game {
            &__titles {
            }

            &__title {
              font-size: 1.2rem;
              display: inline-block;
            }

            &__alternate-titles {
              font-size: 0.8rem;
              margin-left: 0.5rem;
              display: inline-block;
            }

            &__description {
            }
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
  slug: PropTypes.string.isRequired,
  alternateTitles: PropTypes.array,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Game.themes = themes;

export default Game;
