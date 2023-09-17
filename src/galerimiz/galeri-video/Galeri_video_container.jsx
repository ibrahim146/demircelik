import React, { useState } from 'react';

const Galeri_video_container = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="video-container"
      style={{
        width: '500px',
        height: '500px',
        margin: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={videoUrl}
        autoPlay={isPlaying}
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      ></video>
    </div>
  );
};

export default Galeri_video_container;
