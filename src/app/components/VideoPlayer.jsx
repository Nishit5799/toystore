// components/VideoPlayer.js
import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Start from the beginning
      videoRef.current.play(); // Start playing when loaded
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover object-center"
      loop
      muted
      autoPlay
    ></video>
  );
};

export default VideoPlayer;
