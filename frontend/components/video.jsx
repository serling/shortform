import React from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const Video = ({
  youtubeId,
  options,
  onReady,
  onPlay,
  onPause,
  onEnd,
  onError
}) => {
  return (
    <div className="video">
      <YouTube
        videoId={youtubeId}
        opts={options}
        onReady={onReady}
        onPlay={onPlay}
        onPause={onPause}
        onEnd={onEnd}
        onError={onError}
      />
      <style jsx>{`
        .video {
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
  youtubeId: PropTypes.string.isRequired,
  options: PropTypes.object
};

export default Video;
