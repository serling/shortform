import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Breadcrumbs from "./breadcrumbs";
import FilteredList from "./filtered-list";

const ListPage = props => {
  const { games, description, title } = props;

  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Categories",
      href: "/categories"
    }
  ];

  return (
    <Layout title={title}>
      <div className="list-page">
        <Content>
          <Breadcrumbs links={breadcrumbs} />
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
