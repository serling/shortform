import cn from "classnames";
import PropTypes from "prop-types";

import Content from "./content";
import Link from "./link";

const Header = () => (
  <>
    <div className={cn("header", {})}>
      <Content theme={Content.themes.wide}>
        <Link href="/">Home</Link>
      </Content>
    </div>
    <style jsx>
      {`
        .header {
          $self: &;
          width: 100%;
          padding: 1rem;
        }
      `}
    </style>
  </>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
