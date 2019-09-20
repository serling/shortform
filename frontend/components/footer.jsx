import cn from "classnames";
import PropTypes from "prop-types";

import Content from "./content";

const Footer = () => (
  <>
    <div className={cn("footer", {})}>
      <Content theme={Content.themes.wide}>
        <div className="footer__contributors">Contributors: Thomas, Anders</div>
      </Content>
    </div>
    <style jsx>
      {`
        .footer {
          $self: &;
          width: 100%;
          height: 10rem;
          padding: 1rem 0;
          background-color: #dc5a5a;
          display: flex;
          align-items: flex-end;
        }
      `}
    </style>
  </>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
