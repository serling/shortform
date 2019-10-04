import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/front-page";

import Layout from "./layout";
import Content from "./content";
import List from "./list";
import Link from "./link";
import Game from "./game";
import Icon from "./icon";
import CategoriesList from "./categories-list";

// FrontPage.pageTransitionDelayEnter = true;

const FrontPage = props => {
  const { pageTitle, heading, highlightedGames, games, categories } = props;
  const {
    lead,
    highlightsHeading,
    categoriesHeading,
    gamesHeading,
    readMoreCategoriesText,
    readMoreGamesText,
    ctaLabText
  } = phrases;
  // const [hasLoaded, setHasLoaded] = useState(false);

  // useEffect(() => {
  //   setHasLoaded(true);
  //   props.pageTransitionReadyToEnter();
  // }, [hasLoaded]);

  // if (!hasLoaded) return null;

  return (
    <Layout title={pageTitle}>
      <div className="front-page">
        <Content>
          <h1 className="front-page__heading">{heading}</h1>
          <p className="front-page__lead">
            {lead}
            <br />
            <br />
            <span>Please see our</span>
            <span style={{ marginLeft: "0.2em" }}>
              <Icon name="beaker" />
            </span>
            <span>lab for games considered work-in-progress</span>
          </p>
        </Content>
        <Content>
          <h2 className="front-page__subheading">{highlightsHeading}</h2>
          <List>
            {highlightedGames.map(game => {
              const { _id } = game;

              return <Game key={_id} {...game} />;
            })}
          </List>
        </Content>
        <Content color={Content.colors.white} theme={Content.themes.wide}>
          <h2 className="front-page__subheading">{categoriesHeading}</h2>
          <CategoriesList categories={categories} />
          <div className="front-page__actions">
            <Link
              text={readMoreCategoriesText}
              href="/categories"
              theme={Link.themes.inverted}
            />
          </div>
        </Content>
        <Content>
          <h2 className="front-page__subheading">{gamesHeading}</h2>
          <List>
            {games.map(game => {
              const { _id } = game;

              return <Game key={_id} {...game} />;
            })}
          </List>
          <div className="front-page__actions">
            <Link
              text={readMoreGamesText}
              href="/games"
              theme={Link.themes.inverted}
            />
          </div>
        </Content>
        <Content>
          <div className="front-page__cta">
            <Link
              text={ctaLabText}
              iconName="beaker"
              href="/experimental"
              theme={Link.themes.cta}
            />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .front-page {
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          min-height: 100vh;
          padding-top: 2rem;

          &__heading {
            font-size: 2rem;
            margin-bottom: 1rem;

            @media screen and (min-width: $break-at-md) {
              font-size: 3rem;
            }
          }

          &__subheading {
            font-size: 1.5rem;
            margin-bottom: 1rem;

            @media screen and (min-width: $break-at-md) {
              font-size: 2rem;
            }
          }

          &__lead {
            font-size: 1.2rem;

            > * {
              display: inline-block;
            }
          }

          &__actions {
            margin-top: 2rem;
            text-align: right;
          }

          &__cta {
            font-size: 1.5rem;

            &:before {
              content: "";
            }

            @media screen and (min-width: $break-at-sm) {
              font-size: 2rem;
            }

            @media screen and (min-width: $break-at-md) {
              font-size: 3rem;
            }
          }
        }
      `}</style>
    </Layout>
  );
};

FrontPage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  highlightedGames: PropTypes.array.isRequired,
  games: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
};

FrontPage.defaultProps = {
  highlightedGames: [],
  games: [],
  categories: []
};

export default FrontPage;
