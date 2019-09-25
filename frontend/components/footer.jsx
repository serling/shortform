import Content from "./content";

const Footer = () => (
  <>
    <div className="footer">
      <div className="footer__content">
        <div className="footer__credits">
          <div className="footer__curator">Curator: Thomas</div>
          <div className="footer__contributors">
            Contributors: Anders, Simen
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .footer {
          $self: &;
          width: 100%;
          height: 10rem;
          padding: 1rem;
          background-color: #a42323;

          margin-top: 8rem;
          color: white;

          &__content {
            margin: 0 auto;
            max-width: 1240px;
            height: 100%;
            display: flex;
            align-items: flex-end;
          }

          &__credits {
          }

          &__curator {
            margin-bottom: 0.5rem;
          }
        }
      `}
    </style>
  </>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
