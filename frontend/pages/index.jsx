import React from "react";
import Error from "next/error";

import { getInitialData } from "../utilities/api-helper";
import Layout from "../components/layout";

const Index = props => {
  const { data, error } = props;

  // if (error) return <Error {...error} />;

  return (
    <>
      <Layout title="front page">
        <div className="index">
          HELLO CONTENT
          <div className="index__heading">heading</div>
        </div>
      </Layout>
      <style jsx>{`
        .index {
          &__heading {
            color: red;
          }
        }
      `}</style>
    </>
  );
};

Index.getInitialProps = async ctx => {
  const { req } = ctx;

  const { payload, error } = await getInitialData(req, "/api/index");

  return { data: payload, error };
};

export default Index;
