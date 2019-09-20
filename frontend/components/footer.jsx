import Content from "./content";

const Footer = () => (
  <>
    <div className="footer">
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
          padding: 1rem;
          background-color: #dc5a5a;
          display: flex;
          align-items: flex-end;
          margin-top: 8rem;
        }
      `}
    </style>
  </>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
