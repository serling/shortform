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
      <div className="game-page">
        <Content>
          <h1 className="game-page__heading">{title}</h1>
          <p className="game-page__description">{description}</p>
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
          <Panel isFloated={true}>
            <p className="game-page__misc">
              {/* {publishedAt} */}
              {playerCount}
            </p>
            {alternateTitles && (
              <List>
                {alternateTitles.map(title => (
                  <span key={title}>{title}</span>
                ))}
              </List>
            )}
          </Panel>
        </Content>
        <div className="game-page__body">
          <h2 className="game-page__subheading">Description</h2>
          <div className="game-page__setup">
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
        </div>
      </div>

      <style jsx>{`
        .game-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &__body {
            margin-top: 2rem;
          }

          &__heading {
            font-size: 4rem;
          }

          &__description {
            margin-bottom: 2rem;
          }

          &__setup {
            margin-bottom: 2rem;
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
  contributors: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  publishedAt: PropTypes.string.isRequired,
  playerCount: PropTypes.string.isRequired,
  setup: PropTypes.array.isRequired,
  notes: PropTypes.array
};

export default GamePage;
