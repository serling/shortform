import cn from "classnames";
import PropTypes from "prop-types";

const themes = {
  full: "full",
  wide: "wide",
  normal: "normal",
  narrow: "narrow"
};

const colors = {
  white: "white"
};

const Content = ({ theme, children, color }) => (
  <>
    <div
      className={cn("content", {
        [`content--${themes[theme]}`]: themes[theme],
        [`content--color-${colors[color]}`]: colors[color]
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
            margin-top: 4rem;
          }

          &--color-white {
            background-color: white;
            padding: 4rem 0;
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
            padding: 0 1rem;
          }
        }
      `}
    </style>
  </>
);

Content.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  color: PropTypes.oneOf(Object.keys(colors).map(key => colors[key]))
};

Content.defaultProps = {
  theme: themes.normal
};

Content.themes = themes;
Content.colors = colors;

export default Content;
