import { useState } from "react";
import cn from "classnames";

import Image from "../components/image";
import Video from "../components/video";
import PageLoader from "../components/page-loader";

const defaultSerializers = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnReady = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  };

  return {
    marks: {},
    types: {
      block: data => {
        const { node, children } = data;
        const { style } = node;

        if (style === "normal") {
          return <p className="block--normal">{children}</p>;
        }

        return children;
      },
      image: data => {
        const { node } = data;
        const { align } = node;

        return (
          <div className="block__image">
            <Image image={node} />
          </div>
        );
      },
      video: data => {
        const { node } = data;
        const { youtubeVideoId, description } = node;

        return (
          <div
            className={cn("block__video", {
              "block__video--visible": !isLoading
            })}
          >
            <div className="block__video-wrapper">
              <Video
                youtubeVideoId={youtubeVideoId}
                description={description}
                onReady={handleOnReady}
              />
            </div>
            <PageLoader isActive={isLoading} />
            <style jsx>{`
              .block {
                $self: &;

                &__video {
                  position: relative;

                  &--visible {
                    #{$self}__video-wrapper {
                      opacity: 1;
                    }
                  }
                }

                &__video-wrapper {
                  opacity: 0;
                }
              }
            `}</style>
          </div>
        );
      }
    }
  };
};

export { defaultSerializers };
