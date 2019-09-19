import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";

const GamePage = props => {
  const { title } = props;

  return (
    <Layout title={title}>
      <div className="game-page">{title}</div>
    </Layout>
  );
};

GamePage.propTypes = {
  title: PropTypes.string.isRequired
};

export default GamePage;
