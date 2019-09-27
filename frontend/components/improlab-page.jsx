import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Lead from "./lead";
import Content from "./content";
import Breadcrumbs from "./breadcrumbs";
import FilteredGamesList from "./filtered-games-list";

const ImprolabPage = ({ games, title, description }) => {
  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Games",
      href: "/games"
    }
  ];

  return (
    <Layout title={title}>
      <div className="improlab-page">
        <Content>
          <Breadcrumbs links={breadcrumbs} />
          <h1 className="improlab-page__heading">{title}</h1>
          <Lead text={description} />
        </Content>
        <Content>
          <div className="improlab-page__list">
            <FilteredGamesList games={games} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .improlab-page {
          padding-top: 2rem;

          &__heading {
            font-size: 3rem;
          }
        }
      `}</style>
    </Layout>
  );
};

ImprolabPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  games: PropTypes.array.isRequired
};

ImprolabPage.defaultProps = {
  title: "Improlab",
  description:
    "Welcome to improlab. This is where we stick all our un-tested, raw improv games. These might or might now have been tested in front of an audience. Either way, you have been warned!",
  games: []
};

export default ImprolabPage;
