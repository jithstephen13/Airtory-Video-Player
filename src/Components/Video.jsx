import React from "react";


export const VideoJS = (props) => {
;
  const { playerRef, handlePlayerReady,videoUrl,handleReplay,replay } = props;

   // video component that helping display video on Video component And also  have an  Button to restart  and play again 
   // Video are controllers is not given Because  only one time has to play  
   
  return (
    <div className="video-wrapper">
    <video
      ref={playerRef}
      className="video-js vjs-4-3"
      onCanPlay={handlePlayerReady}
      autoPlay
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
    {replay&&<button onClick={handleReplay}>Replay</button>}
  </div>
  );
};
export default VideoJS;
