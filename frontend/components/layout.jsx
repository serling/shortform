import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="layout__content">{children}</div>
      <Footer />
      <style jsx>{`
        .layout__content {
          padding: 0 1rem;
        }
      `}</style>
      <style jsx global>
        {`
          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }

          html,
          body {
            min-height: 100vh;
            margin: 0;
            padding: 0;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;

            background-color: #f9f8f3fc;
            font-family: "Manjari", sans-serif;
          }

          html {
            font-size: 20px;
            font-family: "arial";
          }

          body {
            font-size: 1rem;
            overflow-y: auto;
            overflow-x: hidden;
            width: 100%;
          }

          ul,
          menu {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          button,
          input[type="button"] {
            appearance: none;
            background: transparent;
            border: none;
            border-radius: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
            color: inherit;

            &[href*='//'] {
              color: red;
            }
          }

          :global(.cf) {
            *zoom: 1;

            &:before,
            &:after {
              content: " ";
              display: table;
            }

            &:after {
              clear: both;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
            padding: 0;
            font-size: 1rem;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Layout;
