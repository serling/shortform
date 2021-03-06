import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import FilteredGamesList from "./filtered-games-list";

const ImprolabPage = ({ games, title, description }) => {
  return (
    <Layout title={title}>
      <div className="improlab-page">
        <Content>
          <h2 className="improlab-page__heading">{title}</h2>
          <p className="improlab-page__lead">{description}</p>
        </Content>
        <Content>
          <div className="improlab-page__list">
            <FilteredGamesList games={games} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .improlab-page {
          &__heading {
            font-size: 3rem;
          }

          &__lead {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

ImprolabPage.propTypes = {
  title: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired
};

ImprolabPage.defaultProps = {
  title: "Improlab",
  description:
    "Welcome to improlab. This is where we stick all our un-tested, raw improv games. You have been warned!",
  games: []
};

export default ImprolabPage;
