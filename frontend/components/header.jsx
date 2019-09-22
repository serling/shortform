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
            <div className="header__icon">
              <Icon name="icon-missing" />
            </div>
            <Link href="/experimental">Improlab</Link>
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

          &__actions {
            display: flex;
          }

          &__icon {
            margin-right: 0.5rem;
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
