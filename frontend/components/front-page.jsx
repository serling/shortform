import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/layout";

const FrontPage = props => {
  const { pageTitle } = props;

  return (
    <Layout title={pageTitle}>
      <div className="front-page">front page</div>
    </Layout>
  );
};

FrontPage.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default FrontPage;
