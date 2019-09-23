import Link from "./link";

const Breadcrumbs = ({ links }) => (
  <>
    <div className="breadcrumbs">
      <ul className="breadcrumbs__list">
        {links.map((link, index) => (
          <li key={index} className="breadcrumbs__item">
            <Link {...link} />
          </li>
        ))}
      </ul>
    </div>
    <style jsx>
      {`
        .breadcrumbs {
          $self: &;

          &__list {
            display: flex;
            align-items: center;
          }

          &__item {
            &:after {
              content: ">";
              margin: 0 0.5rem;
            }
          }
        }
      `}
    </style>
  </>
);

Breadcrumbs.propTypes = {};

Breadcrumbs.defaultProps = {};

export default Breadcrumbs;
