import cn from "classnames";
import PropTypes from "prop-types";

import Content from "./content";
import Link from "./link";
import Icon from "./icon";

const Header = () => (
  <>
    <div className={cn("header", {})}>
      <Content theme={Content.themes.wide}>
        <div className="header__actions">
          <div className="header__action">
            <Link href="/">Home</Link>
          </div>
          <div className="header__action">
            <Link href="/experimental">
              <div className="header__link">
                <div className="header__icon">
                  <Icon name="icon-missing" />
                </div>
                <div className="header__text">Improlab</div>
              </div>
            </Link>
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
          }
        }
      `}
    </style>
  </>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
