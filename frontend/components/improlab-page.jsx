import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Intro from "./intro";
import Content from "./content";
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
          <Intro breadcrumbs={breadcrumbs} title={title} lead={description} />
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
