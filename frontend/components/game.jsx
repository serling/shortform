import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import List from "./list";
import Icon from "./icon";

const themes = {
  default: "default"
};

const Game = ({
  theme,
  title,
  slug,
  isExperimental,
  description,
  alternateTitles,
  playerCount
}) => {
  return (
    <div
      className={cn("game", {
        [`game--${themes[theme]}`]: themes[theme],
        "game--experimental": isExperimental
      })}
    >
      <div className="game__header">
        <h2 className="game__title">
          <a href={`/games/${slug}`}>{title}</a>
        </h2>
        <div className="game__icons">
          {isExperimental && (
            <div className="game__icon">
              <Icon name="icon-missing" />
            </div>
          )}
        </div>

        <div className="game__alternate-titles">
          {alternateTitles && (
            <>
              <span className="game__alternate-label">{`aka`}</span>
              <span>
                <List isInline={true}>
                  {alternateTitles.map(title => title)}
                </List>
              </span>
            </>
          )}
        </div>
      </div>
      <p className="game__description">{description}</p>
      <style jsx>
        {`
          .game {
            &__header {
              display: flex;
              align-items: center;
            }

            &__title {
              font-size: 1.2rem;
            }

            &__icon {
              margin-left: 0.5rem;
            }

            &__alternate-titles {
              font-size: 0.8rem;
              margin-left: 0.5rem;
              display: inline-block;

              > * {
                display: inline-block;
              }
            }

            &__alternate-label {
              margin-right: 0.2rem;
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
  playerCount: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  alternateTitles: PropTypes.array,
  isExperimental: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Game.themes = themes;

export default Game;
