import Head from "next/head";

// import Header from '../header/header';
// import Footer from '../footer/footer';

const Layout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Header /> */}
      <div className="layout__content">{children}</div>
      {/* <Footer /> */}
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

          :global(.remove-list-styles) {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          :global(.remove-link-styles) {
            text-decoration: none;
            color: inherit;
          }

          :global(.remove-button-styles) {
            appearance: none;
            background: transparent;
            border: none;
            border-radius: 0;
            padding: 0;
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
        `}
      </style>
    </React.Fragment>
  );
};

export default Layout;
