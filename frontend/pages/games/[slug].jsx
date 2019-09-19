import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import { getInitialData } from "../../utilities/api-helper";
import GamePage from "../../components/game-page";

const Games = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <GamePage {...data} />;
};

Games.getInitialProps = async ctx => {
  const { query, req } = ctx;

  const { payload, error } = await getInitialData(
    req,
    "/api/games",
    query.slug
  );

  return { data: payload, error };
};

Games.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Games;
