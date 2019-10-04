import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/improlab-page";

import Layout from "./layout";
import Intro from "./intro";
import Content from "./content";
import FilteredGamesList from "./filtered-games-list";

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

const ImprolabPage = ({ games }) => {
  const { title, description, searchPhrases } = phrases;

  return (
    <Layout title={title}>
      <div className="improlab-page">
        <Content>
          <Intro breadcrumbs={breadcrumbs} title={title} lead={description} />
        </Content>
        <Content>
          <div className="improlab-page__list">
            <FilteredGamesList games={games} phrases={searchPhrases} />
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
  games: PropTypes.array.isRequired
};

ImprolabPage.defaultProps = {
  games: []
};

export default ImprolabPage;
