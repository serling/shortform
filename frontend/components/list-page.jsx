import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import FilteredList from "./filtered-list";

const ListPage = props => {
  const { pageTitle = "category page", games } = props;
  const heading = games[0].heading.title; //TODO: json from query is not properly nested so each element has the heading property

  return (
    <Layout title={pageTitle}>
      <div className="list-page">
        <Content>
          <span>Category:</span>
          <h2 className="list-page__heading">{heading}</h2>
          <div className="list-page__list">
            <FilteredList games={games} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .list-page {
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
