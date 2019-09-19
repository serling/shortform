import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import { getInitialData } from "../utilities/api-helper";
import FrontPage from "../components/front-page";

const Index = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <FrontPage {...data} />;
};

Index.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, "/api/index");

  return { data: payload, error };
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Index;
