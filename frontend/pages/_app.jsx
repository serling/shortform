import React from "react";
import App from "next/app";
import WithPageTransition from "../components/with-page-transitions";

//TODO: server does not handle certain characters: ø æ å, ?

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <WithPageTransition theme={WithPageTransition.themes.left}>
        <Component {...pageProps} />
      </WithPageTransition>
    );
  }
}

export default MyApp;
