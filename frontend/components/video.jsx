import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const Video = ({
  youtubeVideoId,
  description,
  options,
  onReady,
  onPlay,
  onPause,
  onEnd,
  onError
}) => {
  return (
    <div className="video">
      <div className="video__player">
        <YouTube
          className="video__youtube"
          videoId={youtubeVideoId}
          opts={options}
          onReady={onReady}
          onPlay={onPlay}
          onPause={onPause}
          onEnd={onEnd}
          onError={onError}
        />
      </div>
      {description && (
        <div className="video__description">
          <p className="video__text">{description}</p>
        </div>
      )}
      <style jsx global>{`
        .video__youtube {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        .video {
          &__player {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 56.25%;
          }

          &__description {
            border-bottom: 1px solid #c1c1c1;
            margin-top: 0.25rem;
          }

          &__text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

Video.propTypes = {
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onError: PropTypes.func,
  description: PropTypes.string,
  youtubeVideoId: PropTypes.string.isRequired,
  options: PropTypes.object
};

export default Video;
