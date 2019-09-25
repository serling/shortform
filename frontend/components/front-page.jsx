import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import List from "./list";
import Link from "./link";
import Game from "./game";
import CategoriesList from "./categories-list";

const pageTransitionDelayEnter = true;

const FrontPage = props => {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
    props.pageTransitionReadyToEnter();
  }, [hasLoaded]);

  const { pageTitle, heading, highlightedGames, games, categories } = props;

  if (!hasLoaded) return null;

  return (
    <Layout title={pageTitle}>
      <div className="front-page">
        <Content>
          <h1 className="front-page__heading">{heading}</h1>
          <p className="front-page__lead">
            Welcome to a list of short form games.
          </p>
        </Content>
        <Content>
          <h2 className="front-page__heading">Random highlights</h2>
          <List>
            {highlightedGames.map(game => {
              const { _id } = game;

              return <Game key={_id} {...game} />;
            })}
          </List>
        </Content>
        <Content>
          <h2 className="front-page__heading">Check out some categories</h2>
          <CategoriesList categories={categories} />
          <div className="front-page__actions">
            <Link
              text="Browse more categories"
              href="/categories"
              theme={Link.themes.inverted}
            />
          </div>
        </Content>
        <Content>
          <h2 className="front-page__heading">Or just browse games...</h2>
          <List>
            {games.map(game => {
              const { _id } = game;

              return <Game key={_id} {...game} />;
            })}
          </List>
          <div className="front-page__actions">
            <Link
              text="See even more games"
              href="/games"
              theme={Link.themes.inverted}
            />
          </div>
        </Content>
        <Content>
          <div className="front-page__cta">
            <Link
              text="Check out the lab"
              href="/experimental"
              theme={Link.themes.cta}
            />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .front-page {
          min-height: 100vh;

          &__heading {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          &__actions {
            margin-top: 2rem;
            text-align: right;
          }

          &__cta {
            font-size: 3rem;
          }
        }
      `}</style>
    </Layout>
  );
};

FrontPage.pageTransitionDelayEnter = pageTransitionDelayEnter;

FrontPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  highlightedGames: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

FrontPage.defaultProps = {
  pageTitle: "front page",
  heading: "Front Page",
  highlightedGames: [],
  games: [],
  categories: []
};

export default FrontPage;
