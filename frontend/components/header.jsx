import cn from "classnames";
import PropTypes from "prop-types";

import Content from "./content";
import Link from "./link";
import SiteSearch from "./site-search";

const Header = ({ hideSearchBar }) => (
  <>
    <div className="header">
      <Content theme={Content.themes.wide}>
        <div className="header__content">
          <div className="header__actions">
            <div className="header__action">
              <Link href="/">Home</Link>
            </div>
            <div className="header__action">
              <Link href="/games">Games</Link>
            </div>
            <div className="header__action">
              <Link href="/categories">Categories</Link>
            </div>
            <div className="header__action header__action--improlab">
              <Link text="lab" href="/experimental" iconName="beaker" />
            </div>
          </div>
          {!hideSearchBar && (
            <div className="header__search">
              <SiteSearch
                searchInputId="header-search-0"
                placeholderText=""
                phrases={{
                  placeholderText: "",
                  labelText: "find games or categories..."
                }}
                labelText="find games or categories..."
              />
            </div>
          )}
          {/* <div className="header__actions header__actions--post">
            <div className="header__action">
              <Link href="/random">Random</Link>
            </div>
            <div className="header__action">
              <Link text="lab" href="/experimental" iconName="beaker" />
            </div>
          </div> */}
        </div>
      </Content>
    </div>
    <style jsx>
      {`
        .header {
          $self: &;
          $break-at-sm: 25rem; //400px
          $break-at-md: 50rem; //800px
          $break-at-lg: 64rem; //1024px

          width: 100%;
          padding: 1rem 0;
          border-bottom: 2px solid #eaeaea;

          &__content {
            flex-flow: column;
            display: flex;
            justify-content: space-between;

            @media screen and (min-width: $break-at-md) {
              align-items: center;
              flex-flow: row;
            }
          }

          &__search {
            flex: 1 1 auto;
            margin-top: 1rem;

            @media screen and (min-width: $break-at-sm) {
              margin: 0;
            }

            @media screen and (min-width: $break-at-md) {
              margin: 0 2rem;
            }
          }

          &__actions {
            display: flex;
            flex-wrap: wrap;
            margin-left: -1rem;
            margin-top: -1rem;

            @media screen and (min-width: $break-at-sm) {
            }

            &--post {
              display: none;

              @media screen and (min-width: $break-at-md) {
                display: block;
              }
            }
          }

          &__link {
            display: flex;
            align-items: center;
          }

          &__action {
            margin-left: 1rem;
            margin-top: 1rem;
            display: flex;
            align-items: center;

            @media screen and (min-width: $break-at-sm) {
            }

            &:first-child {
              @media screen and (min-width: $break-at-sm) {
              }
            }

            &:last-child {
              flex: 1 0 auto;
            }

            &--improlab {
              @media screen and (min-width: $break-at-md) {
                display: none;
              }
            }
          }
        }
      `}
    </style>
  </>
);

Header.propTypes = {
  hideSearchBar: PropTypes.bool
};

export default Header;
