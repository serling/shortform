import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import FilteredList from "./filtered-list";

const ImprolabPage = ({ games, heading, pageTitle }) => {
  return (
    <Layout title={pageTitle}>
      <div className="improlab-page">
        <Content>
          <h2 className="improlab-page__heading">{heading}</h2>
          <p className="improlab-page__lead">
            Welcome to improlab. This is where we stick all our utested, raw
            improv games. You have been warned!
          </p>
          <div className="improlab-page__list">
            <FilteredList games={games} />
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
  pageTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  games: PropTypes.array.isRequired
};

ImprolabPage.defaultProps = {
  pageTitle: "Improlab",
  heading: "Improlab",
  games: PropTypes.array.isRequired
};

export default ImprolabPage;
