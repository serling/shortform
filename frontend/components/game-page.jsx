import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";

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
        <Content>{title}</Content>
      </div>
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
  setup: PropTypes.string.isRequired,
  notes: PropTypes.string
};

export default GamePage;
