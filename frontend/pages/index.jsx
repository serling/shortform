import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import WithPageTransition from "../components/with-page-transitions";
import { getInitialData } from "../utilities/api-helper";
import FrontPage from "../components/front-page";

const Index = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return (
    <WithPageTransition>
      <FrontPage {...data} />
    </WithPageTransition>
  );
};

Index.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, "/api/home");

  return { data: payload, error };
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Index;
