import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Lead from "./lead";
import Content from "./content";
import Breadcrumbs from "./breadcrumbs";
import List from "./list";
import Grid from "./grid";
import Link from "./link";
import Game from "./game";
import Category from "./category";

const SearchPage = ({ games, categories, title, description }) => {
  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    }
  ];

  return (
    <Layout title={title}>
      <div className="search-page">
        <Content>
          <Breadcrumbs links={breadcrumbs} />
          <h1 className="search-page__heading">{title}</h1>
          <Lead text={description} />
        </Content>
        <Content>
          <div className="search-page__lists">
            {games.length <= 0 && categories.length <= 0 && (
              <p>Sorry, we couldn't find anything.</p>
            )}
            {games.length > 0 && (
              <div className="search-page__list">
                <h2 className="search-page__subheading">Matching games:</h2>
                <Grid>
                  {games.map(game => {
                    const { _id } = game;
                    return <Game key={_id} {...game} />;
                  })}
                </Grid>
                <div className="search-page__actions">
                  <Link
                    text="Browse all games"
                    href="/games"
                    theme={Link.themes.inverted}
                  />
                </div>
              </div>
            )}
            {categories.length > 0 && (
              <div className="search-page__list">
                <h2 className="search-page__subheading">
                  Matching categories:
                </h2>
                <Grid>
                  {categories.map(category => {
                    const { _id } = category;
                    return <Category key={_id} {...category} />;
                  })}
                </Grid>
                <div className="search-page__actions">
                  <Link
                    text="Browse all categories"
                    href="/categories"
                    theme={Link.themes.inverted}
                  />
                </div>
              </div>
            )}
          </div>
        </Content>
      </div>
      <style jsx>{`
        .search-page {
          &__heading {
            font-size: 3rem;
          }

          &__subheading {
            font-size: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 1rem;
          }

          &__list {
            margin-bottom: 4rem;
          }

          &__actions {
            margin-top: 2rem;
            text-align: right;
          }
        }
      `}</style>
    </Layout>
  );
};

SearchPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  games: PropTypes.array,
  categories: PropTypes.array
};

SearchPage.defaultProps = {
  title: "Search Results",
  description: "Searched through games and categories.",
  games: [],
  categories: []
};

export default SearchPage;
