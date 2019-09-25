import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Lead from "./lead";
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
          <h1 className="games-page__heading">{title}</h1>
          <Lead text={description} />
        </Content>
        <Content>
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
  description:
    "Browse our selection of games, or use the categories section to narrow what you're looking for. Or check out the improlab for crazy ideas for games we haven't tested yet."
};

export default GamesPage;
