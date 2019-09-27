import PropTypes from "prop-types";
import { PageTransition } from "next-page-transitions";

import PageLoader from "./page-loader";

const TIMEOUT = 300;

//TODO: implement animations
const themes = {
  left: "left",
  right: "right",
  top: "top"
};

// https://github.com/illinois/next-page-transitions/tree/master/examples/delayed-enter
const WithPageTransition = ({ children, theme }) => {
  return (
    <>
      <PageTransition
        timeout={TIMEOUT}
        classNames={`page-transition--${themes[theme]}`}
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
        .page-transition--top-enter {
          opacity: 0;
          transform: translate3d(0, -20px, 0);
        }

        .page-transition--top-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition--top-exit {
          opacity: 1;
        }
        .page-transition--top-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }

        .page-transition--left-enter {
          opacity: 0;
          transform: translate3d(-20px, 0, 0);
        }

        .page-transition--left-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition--left-exit {
          opacity: 1;
        }
        .page-transition--left-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }

        .page-transition--right-enter {
          opacity: 0;
          transform: translate3d(20px, 0, 0);
        }

        .page-transition--right-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition--right-exit {
          opacity: 1;
        }
        .page-transition--right-exit-active {
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
};

WithPageTransition.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string
};

WithPageTransition.defaultProps = {
  theme: themes.right
};

WithPageTransition.themes = themes;

export default WithPageTransition;
