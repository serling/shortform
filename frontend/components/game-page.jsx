import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import BlockContent from "./block-content";
import List from "./list";

const GamePage = props => {
  const {
    title,
    description,
    alternateTitles,
    contributors,
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
          <p className="game-page__misc">
            {publishedAt}
            {playerCount}
          </p>
          {alternateTitles && (
            <List>
              {alternateTitles.map(title => (
                <span key={title}>{title}</span>
              ))}
            </List>
          )}
          {/* <List>
            {categories.map(category => (
              <span key={title}>{category}</span>
            ))}
          </List> */}
          {/* <List>{contributors.map(contributor => contributor)}</List> */}
          <div className="game-page__setup">
            <BlockContent content={setup} />
          </div>
          {notes && (
            <div className="game-page__notes">
              <BlockContent content={notes} />
            </div>
          )}
        </Content>
      </div>
      <style jsx>{`
        .game-page {
          &__heading {
            font-size: 1.2rem;
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
