import React from "react";
import Error from "next/error";

import { getInitialData } from "../../utilities/api-helper";

const GamePage = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <div>here's a game!!</div>;
};

GamePage.getInitialProps = async ctx => {
  const { query, req } = ctx;

  const { payload, error } = await getInitialData(
    req,
    "/api/games",
    query.slug
  );

  return { data: payload, error };
};

export default GamePage;
