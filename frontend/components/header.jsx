import cn from "classnames";
import PropTypes from "prop-types";

import Content from "./content";
import Link from "./link";
import Icon from "./icon";
import SiteSearch from "./site-search";

const Header = () => (
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
          </div>
          <div className="header__search">
            <SiteSearch placeholderText="find games or categories..." />
          </div>
          <div className="header__actions">
            <div className="header__action">
              <Link href="/experimental">
                <div className="header__link">
                  <div className="header__icon">
                    <Icon name="beaker" size={Icon.sizes.tiny} />
                  </div>
                  <div className="header__text">Improlab</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Content>
    </div>
    <style jsx>
      {`
        .header {
          $self: &;
          width: 100%;
          padding: 1rem;
          margin-bottom: 2rem;
          border-bottom: 2px solid #eaeaea;

          &__content {
            display: flex;
            align-items: center;
          }

          &__search {
            flex: 1 1 auto;
            margin: 0 2rem;
          }

          &__actions {
            display: flex;
          }

          &__icon {
            margin-right: 0.25rem;
          }

          &__link {
            display: flex;
            align-items: center;
          }

          &__action {
            margin-left: 1rem;
            display: flex;
            align-items: center;

            &:first-child {
              margin-left: 0;
            }

            &:last-child {
              flex: 1 0 auto;
            }
          }
        }
      `}
    </style>
  </>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
