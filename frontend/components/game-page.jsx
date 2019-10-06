import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/game-page";

import Layout from "./layout";
import Content from "./content";
import BlockContent from "./block-content";
import List from "./list";
import Link from "./link";
import Game from "./game";
import Grid from "./grid";
import Panel from "./panel";
import FormattedDate from "./formatted-date";
import Breadcrumbs from "./breadcrumbs";

const GamePage = props => {
  const {
    title,
    description,
    alternateTitles,
    categories,
    lastUpdated,
    isExperimental,
    playerCount,
    setup,
    notes,
    relatedGames
  } = props;

  const {
    descriptionHeading,
    overviewHeading,
    playerCountLabel,
    alternateTitlesLabel,
    notesHeading,
    relatedGamesHeading,
    dateLabel
  } = phrases;

  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Games",
      href: "/games"
    }
  ];

  // const improlabLink = {
  //   text: "lab",
  //   href: "/experimental"
  // };

  return (
    <Layout title={title}>
      <div className="game-page">
        <Content color={Content.colors.white}>
          <Breadcrumbs
            links={
              breadcrumbs
              // isExperimental ? [...breadcrumbs, improlabLink] : breadcrumbs
            }
          />
          <div className="game-page__header">
            <h1 className="game-page__heading">{title}</h1>
            {categories && (
              <div className="game-page__categories">
                <span className="game-page__categories-label">Categories:</span>
                <Grid theme={Grid.themes.auto}>
                  {categories.map(({ slug, title }) => (
                    <Link
                      href={`/categories/${slug}`}
                      key={title}
                      theme={Link.themes.inverted}
                    >
                      {title}
                    </Link>
                  ))}
                </Grid>
              </div>
            )}
          </div>
        </Content>
        <Content>
          <div className="game-page__body">
            <h2 className="game-page__subheading">{descriptionHeading}</h2>
            <div className="game-page__setup cf">
              <Panel isFloated={true}>
                <h3 className="game-page__aside-heading">{overviewHeading}</h3>
                <p className="game-page__aside-description">{description}</p>
                <ul className="game-page__aside-list">
                  <li className="game-page__aside-item">
                    <span className="game-page__aside-label">
                      {playerCountLabel}
                    </span>
                    <span className="game-page__aside-value">
                      {playerCount}
                    </span>
                  </li>
                  {alternateTitles && (
                    <li className="game-page__aside-item">
                      <span className="game-page__aside-label">
                        {alternateTitlesLabel}
                      </span>
                      <span className="game-page__aside-value">
                        {alternateTitles.map((title, index, array) => {
                          return (
                            <React.Fragment key={title}>
                              {index === array.length - 1
                                ? `${title}`
                                : `${title}, `}
                            </React.Fragment>
                          );
                        })}
                      </span>
                    </li>
                  )}
                </ul>
              </Panel>
              <BlockContent content={setup} />
            </div>
            {notes && (
              <div className="game-page__notes">
                <h2 className="game-page__notes-heading">{notesHeading}</h2>
                <div className="game-page__notes-text">
                  <BlockContent content={notes} />
                </div>
              </div>
            )}
            <div className="game-page__date">
              <FormattedDate dateString={lastUpdated} text={dateLabel} />
            </div>
          </div>
        </Content>
        {relatedGames && (
          <Content>
            <h2 className="game-page__related-heading">
              {`${relatedGamesHeading} ${title}:`}
            </h2>
            <List>
              {relatedGames.map((game, index) => (
                <Game key={index} {...game} />
              ))}
            </List>
          </Content>
        )}
      </div>
      <style jsx>{`
        .game-page {
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          display: flex;
          flex-direction: column;
          justify-content: center;

          &__body {
          }

          &__heading {
            font-size: 2rem;

            @media screen and (min-width: $break-at-sm) {
              font-size: 3rem;
            }

            @media screen and (min-width: $break-at-md) {
              font-size: 4rem;
            }
          }

          &__aside-list {
          }

          &__aside-description {
            margin-bottom: 1rem;
            font-size: 0.8rem;
          }

          &__aside-item {
            &:before {
              content: "•";
              font-size: 1.5rem;
              color: #a42323;
              display: inline-block;
              width: 1rem;
            }
          }

          &__subheading {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          &__date {
            text-align: right;
            margin-top: 2rem;
          }

          &__aside-heading {
            margin-bottom: 1rem;
          }

          &__aside-label {
            text-transform: uppercase;
            font-size: 0.8rem;
            margin-right: 0.5rem;
          }

          &__aside-value {
            font-size: 0.8rem;
          }

          &__description {
            margin-bottom: 2rem;
          }

          &__categories-label {
            display: block;
            margin-bottom: 0.5rem;
          }

          &__setup {
            margin-bottom: 2rem;
          }

          &__notes-heading {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          &__notes-text {
          }

          &__related-heading {
            font-size: 2rem;
            margin-bottom: 1rem;

            @media screen and (min-width: $break-at-md) {
              padding-top: 4rem;
            }
          }

          &__notes {
          }
        }
      `}</style>
    </Layout>
  );
};

GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alternateTitles: PropTypes.array,
  categories: PropTypes.array.isRequired,
  lastUpdated: PropTypes.string,
  playerCount: PropTypes.string.isRequired,
  setup: PropTypes.array.isRequired,
  notes: PropTypes.array
};

export default GamePage;
