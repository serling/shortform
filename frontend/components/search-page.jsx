import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/search-page";

import Layout from "./layout";
import Content from "./content";
import Intro from "./intro";
import SiteSearch from "./site-search";

const breadcrumbs = [
  {
    text: "Home",
    href: "/"
  }
];

const SearchPage = ({ games, queryValues }) => {
  const { title, description, noMatchText, searchPhrases } = phrases;

  return (
    <Layout title={title} hideSearchBar={true}>
      <div className="search-page">
        <Content>
          <Intro breadcrumbs={breadcrumbs} title={title} lead={description} />
        </Content>
        <Content>
          {games.length <= 0 && (
            <p className="search-page__message">{noMatchText}</p>
          )}
          <SiteSearch
            searchInputId="search-page-0"
            theme={SiteSearch.themes.complex}
            phrases={searchPhrases}
            games={games}
            {...queryValues}
          />
        </Content>
      </div>
      <style jsx>{`
        .search-page {
          padding-top: 2rem;

          &__message {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>
    </Layout>
  );
};

SearchPage.propTypes = {
  games: PropTypes.array,
  queryValues: PropTypes.object
};

SearchPage.defaultProps = {
  games: []
};

export default SearchPage;
