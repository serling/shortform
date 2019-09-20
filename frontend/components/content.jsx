import cn from "classnames";
import PropTypes from "prop-types";

const themes = {
  full: "full",
  wide: "wide",
  normal: "normal",
  narrow: "narrow"
};

const Content = ({ theme, children }) => (
  <>
    <div
      className={cn("content", {
        [`content--${themes[theme]}`]: themes[theme]
      })}
    >
      <div className="content__inner">{children}</div>
    </div>
    <style jsx>
      {`
        .content {
          $self: &;
          width: 100%;

          + #{$self} {
            margin-top: 2rem;
          }

          &--wide {
            > #{$self}__inner {
              max-width: 1240px;
            }
          }

          &--normal {
            > #{$self}__inner {
              max-width: 980px;
            }
          }

          &--narrow {
            > #{$self}__inner {
              max-width: 768px;
            }
          }

          &__inner {
            margin: 0 auto;
          }
        }
      `}
    </style>
  </>
);

Content.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Content.defaultProps = {
  theme: themes.normal
};

Content.themes = themes;

export default Content;
