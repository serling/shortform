import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";
import Content from "../components/content";
import List from "../components/list";
import Game from "../components/game";

const FrontPage = props => {
  const { pageTitle, heading, highlightedGames } = props;

  return (
    <Layout title={pageTitle}>
      <div className="front-page">
        <Content>
          <h1 className="front-page__heading">{heading}</h1>
          <List>
            {highlightedGames.map(game => {
              const { _id } = game;

              return <Game key={_id} {...game} />;
            })}
          </List>
        </Content>
      </div>
      <style jsx>{`
        .front-page {
          &__heading {
            font-size: 4rem;
          }
        }
      `}</style>
    </Layout>
  );
};

FrontPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  highlightedGames: PropTypes.array.isRequired
};

export default FrontPage;
