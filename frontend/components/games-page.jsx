import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Breadcrumbs from "./breadcrumbs";
import FilteredGamesList from "./filtered-games-list";

const GamesPage = props => {
  const { games, description, title } = props;

  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    }
  ];

  return (
    <Layout title={title}>
      <div className="games-page">
        <Content>
          <Breadcrumbs links={breadcrumbs} />
          <h2 className="games-page__heading">{title}</h2>
          <p className="games-page__lead">{description}</p>
          <div className="games-page__list">
            <FilteredGamesList games={games} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .games-page {
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

GamesPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  games: PropTypes.array.isRequired
};

GamesPage.defaultProps = {
  games: [],
  title: "Games",
  description: "List of all the games"
};

export default GamesPage;
