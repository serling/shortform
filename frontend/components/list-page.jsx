import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import List from "./list";
import Game from "./game";

const ListPage = props => {
  const { games, pageTitle = "ehelo", title = "whatsup" } = props;

  return (
    <Layout title={pageTitle}>
      <div className="front-page">
        <Content>
          <h2 className="front-page__heading">CATEGORY HERE</h2>
          <List>
            {games.map(game => {
              const { _id } = game;

              return <Game key={_id} {...game} />;
            })}
          </List>
        </Content>
      </div>
      <style jsx>{`
        .front-page {
          min-height: 100vh;

          &__heading {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

ListPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired
};

export default ListPage;
