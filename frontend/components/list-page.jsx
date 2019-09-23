import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import FilteredList from "./filtered-list";

const ListPage = props => {
  const { games, description, title } = props;

  return (
    <Layout title={title}>
      <div className="list-page">
        <Content>
          <span>Category:</span>
          <h2 className="list-page__heading">{title}</h2>
          <p className="list-page__lead">{description}</p>
          <div className="list-page__list">
            <FilteredList games={games} />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .list-page {
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

ListPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  games: PropTypes.array.isRequired
};

export default ListPage;
