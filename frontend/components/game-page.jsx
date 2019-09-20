import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import BlockContent from "./block-content";
import List from "./list";
import Link from "./link";
import Panel from "./panel";

const GamePage = props => {
  const {
    title,
    description,
    alternateTitles,
    categories,
    publishedAt,
    playerCount,
    setup,
    notes
  } = props;

  return (
    <Layout title={title}>
      <Content>
        <div className="game-page">
          <div className="game-page__header">
            <h1 className="game-page__heading">{title}</h1>
            {categories && (
              <div className="game-page__categories">
                <List isInline={true}>
                  {categories.map(({ slug, title }) => (
                    <Link
                      href={`/categories/${slug}`}
                      key={title}
                      theme={Link.themes.label}
                    >
                      {title}
                    </Link>
                  ))}
                </List>
              </div>
            )}
          </div>
          <div className="game-page__body">
            <h2 className="game-page__subheading">Description</h2>
            <div className="game-page__setup">
              <Panel isFloated={true}>
                <h3 className="game-page__aside-heading">Quick overview</h3>
                <p className="game-page__aside-description">{description}</p>
                <ul className="game-page__aside-list">
                  <li className="game-page__aside-item">
                    <span className="game-page__aside-label">
                      Player Count:
                    </span>
                    <span className="game-page__aside-value">
                      {playerCount}
                    </span>
                  </li>
                  {alternateTitles && (
                    <li className="game-page__aside-item">
                      <span className="game-page__aside-label">
                        Also known as:
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
              <>
                <h2 className="game-page__subheading">Teacher's notes</h2>
                <div className="game-page__notes">
                  <BlockContent content={notes} />
                </div>
              </>
            )}
            <div className="game-page__date">
              <p>Last updated: {publishedAt}</p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .game-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &__body {
              margin-top: 2rem;
            }

            &__heading {
              font-size: 4rem;
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
                color: #dc5a5a;
                display: inline-block;
                width: 1rem;
              }
            }

            &__subheading {
              font-size: 1.2rem;
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

            &__setup {
              margin-bottom: 2rem;
            }
          }
        `}</style>
      </Content>
    </Layout>
  );
};

GamePage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  alternateTitles: PropTypes.array,
  categories: PropTypes.array.isRequired,
  publishedAt: PropTypes.string.isRequired,
  playerCount: PropTypes.string.isRequired,
  setup: PropTypes.array.isRequired,
  notes: PropTypes.array
};

export default GamePage;
