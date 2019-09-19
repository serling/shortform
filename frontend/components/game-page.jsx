import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import Content from "../components/content";

const GamePage = props => {
  const { title } = props;

  return (
    <Layout title={title}>
      <div className="game-page">
        <Content>{title}</Content>
      </div>
    </Layout>
  );
};

GamePage.propTypes = {
  title: PropTypes.string.isRequired
};

export default GamePage;
