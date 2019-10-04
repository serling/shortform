import React from "react";
import PropTypes from "prop-types";
import { phrases } from "../static/data/phrases/games-page";

import Layout from "./layout";
import Content from "./content";
import Intro from "./intro";
import Link from "./link";
import FilteredGamesList from "./filtered-games-list";

const breadcrumbs = [
  {
    text: "Home",
    href: "/"
  }
];

const GamesPage = props => {
  const { games } = props;
  const {
    title,
    description,
    searchPhrases,
    ctaLabText,
    ctaCategoriesText
  } = phrases;

  return (
    <Layout title={title}>
      <div className="games-page">
        <Content>
          <Intro breadcrumbs={breadcrumbs} title={title} lead={description} />
        </Content>
        <Content>
          <div className="games-page__cta">
            <Link
              iconName="beaker"
              text={ctaLabText}
              href="/experimental"
              theme={Link.themes.cta}
            />
          </div>
        </Content>
        <Content>
          <div className="games-page__list">
            <FilteredGamesList games={games} phrases={searchPhrases} />
          </div>
        </Content>
        <Content>
          <div className="games-page__cta">
            <Link
              text={ctaCategoriesText}
              href="/categories"
              theme={Link.themes.cta}
            />
          </div>
        </Content>
      </div>
      <style jsx>{`
        .games-page {
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          padding-top: 2rem;

          &__cta {
            font-size: 1.5rem;
            display: flex;
            justify-content: flex-end;

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

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
};

GamesPage.defaultProps = {
  games: []
};

export default GamesPage;
