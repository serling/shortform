import PropTypes from "prop-types";

import BlockContentToReact from "@sanity/block-content-to-react";
import { defaultSerializers } from "../utilities/block-content-serializers";

const BlockContent = ({ content }) => {
  return (
    <>
      <div className="block-content">
        <BlockContentToReact
          blocks={content}
          serializers={defaultSerializers}
        />
      </div>
      <style jsx global>{`
        .block-content {
          line-height: 1.6;

          .block--normal {
            max-width: 980px;
            margin: 0 auto;
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
};

BlockContent.propTypes = {
  content: PropTypes.array.isRequired
};

export default BlockContent;
