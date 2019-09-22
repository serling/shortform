import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import { getInitialData } from "../utilities/api-helper";
import ImprolabPage from "../components/improlab-page";

const Experimental = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <ImprolabPage {...data} />;
};

Experimental.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, "/api/experimental");

  return { data: payload, error };
};

Experimental.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Experimental;
