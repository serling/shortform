import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Icon from "./icon";
import Link from "./link";

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
        {isExperimental && (
          <div className="game__icons">
            <div className="game__icon">
              <Icon name="beaker" size={Icon.sizes.tiny} />
            </div>
          </div>
        )}
        <h2 className="game__title">
          <Link href={`/games/${slug}`}>{title}</Link>
        </h2>
      </div>
      <div className="game__meta">
        {alternateTitles && (
          <div className="game__alternate-titles">
            <>
              <span className="game__alternate-label">aka</span>
              <span className="game__alternate-values">
                {alternateTitles.map((title, index, array) => {
                  return index === array.length - 1 ? title : `${title}, `;
                })}
              </span>
            </>
          </div>
        )}
      </div>
      <div className="game__body">
        <p className="game__description">
          {isExperimental && (
            <span className="game__experimental-label">{`Experimental: `}</span>
          )}
          <span className="game__experimental-text">{description}</span>
        </p>
      </div>
      <style jsx>
        {`
          .game {
            $break-at-sm: 25rem; //400px
            $break-at-md: 50rem; //800px
            $break-at-lg: 64rem; //1024px

            display: flex;
            flex-wrap: wrap;
            align-items: center;

            &__header {
              display: flex;
              align-items: center;
              margin-right: 0.25em;
            }

            &__meta {
            }

            &__body {
              flex-basis: 100%;
            }

            &__title {
              font-size: 1.2rem;
            }

            &__icons {
              align-self: end;
            }

            &__icon {
              margin-right: 0.5rem;
            }

            &__alternate-titles {
              font-size: 0.8rem;
              display: inline-block;

              > * {
                display: inline-block;
              }
            }

            &__alternate-label {
              margin-right: 0.2rem;
            }

            &__experimental-label {
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
  playerCount: PropTypes.string,
  slug: PropTypes.string.isRequired,
  alternateTitles: PropTypes.array,
  isExperimental: PropTypes.bool,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Game.themes = themes;

export default Game;
