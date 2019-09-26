import fetch from "isomorphic-unfetch";

const LOCAL_HOST = "localhost:3000";

const genericError = {
  title: "generic fetch error",
  statusCode: 500
};

const fatalError = {
  title: "fatal fetch error",
  statusCode: 500
};

function absoluteUrl(req, localHost = LOCAL_HOST) {
  var protocol = "https:";

  var host = req ? req.headers.host : window.location.hostname;

  if (host.indexOf("localhost") > -1) {
    if (localHost) host = localHost;
    protocol = "http:";
  }
  return {
    protocol,
    host
  };
}

const getInitialData = async (req, apiRoute, resourceId, query) => {
  const { protocol, host } = absoluteUrl(req);

  if (query) {
    var queryString = Object.keys(query)
      .map(function(key) {
        return key + "=" + query[key];
      })
      .join("&");
  }

  let endpoint = `${protocol}//${host}${apiRoute}`;

  if (resourceId) endpoint = `${endpoint}/${resourceId}`;

  if (queryString) endpoint = `${endpoint}?${queryString}`;

  const response = await fetch(endpoint);

  const responseData = await response
    .json()
    .then(data => {
      const { success, payload, error } = data;

      if (!success) {
        console.log("response not successfull");

        return {
          error: { ...genericError, ...error }
        };
      }

      return { payload };
    })
    .catch(error => {
      console.log("* fatal error:", error);

      return {
        error: { ...fatalError, ...error }
      };
    });

  return { ...responseData };
};

module.exports = {
  getInitialData
};
