import React from "react";
import PropTypes from "prop-types";

import Layout from "./layout";
import Content from "./content";
import Intro from "./intro";
import Link from "./link";
import Icon from "./icon";
import FilteredGamesList from "./filtered-games-list";

const GamesPage = props => {
  const { games, description, title } = props;

  const breadcrumbs = [
    {
      text: "Home",
      href: "/"
    }
  ];

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
              text="Check out the lab"
              href="/experimental"
              theme={Link.themes.cta}
            />
          </div>
        </Content>
        <Content>
          <div className="games-page__list">
            <FilteredGamesList games={games} />
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  games: PropTypes.array.isRequired
};

GamesPage.defaultProps = {
  games: [],
  title: "Games",
  description:
    "Browse our selection of games, or use the categories section to narrow what you're looking for. Or check out the lab for crazy ideas for games we haven't tested yet."
};

export default GamesPage;
