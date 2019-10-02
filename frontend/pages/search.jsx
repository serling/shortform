import React from "react";
import Error from "next/error";
import PropTypes from "prop-types";

import { getInitialData } from "../utilities/api-helper";
import SearchPage from "../components/search-page";

const Search = props => {
  const { data, error } = props;

  if (error) return <Error {...error} />;

  return <SearchPage {...data} />;
};

Search.getInitialProps = async ctx => {
  const { query, req } = ctx;

  const { payload, error } = await getInitialData(
    req,
    "/api/search",
    undefined,
    query
  );

  return { data: payload, error };
};

Search.propTypes = {
  data: PropTypes.object.isRequired,
  error: PropTypes.object
};

export default Search;
