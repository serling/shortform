import PropTypes from "prop-types";
import cn from "classnames";
import { PageTransition } from "next-page-transitions";

import PageLoader from "./page-loader";

const TIMEOUT = 400;

//TODO: implement animations
const themes = {
  left: "left",
  right: "right"
};

// https://github.com/illinois/next-page-transitions/tree/master/examples/delayed-enter
const WithPageTransition = ({ children, theme }) => (
  <>
    <PageTransition
      timeout={TIMEOUT}
      classNames={cn("page-transition", {
        [`page-transition--${themes[theme]}`]: themes[theme]
      })}
      loadingComponent={<PageLoader />}
      loadingDelay={0}
      loadingTimeout={{
        enter: TIMEOUT,
        exit: 0
      }}
      loadingClassNames="loading-indicator"
    >
      {children}
    </PageTransition>

    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
        transform: translate3d(-20px, 0, 0);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity ${TIMEOUT}ms;
      }
      .loading-indicator-appear,
      .loading-indicator-enter {
        opacity: 0;
      }
      .loading-indicator-appear-active,
      .loading-indicator-enter-active {
        opacity: 1;
        transition: opacity ${TIMEOUT}ms;
      }
    `}</style>
  </>
);

WithPageTransition.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string
};

export default WithPageTransition;
