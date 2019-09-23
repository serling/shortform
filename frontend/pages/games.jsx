import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import { getInitialData } from "../utilities/api-helper";
import GamesPage from "../components/games-page";

const Games = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <GamesPage {...data} />;
};

Games.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, "/api/games");

  return { data: payload, error };
};

Games.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Games;
