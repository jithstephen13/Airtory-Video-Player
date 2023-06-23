import React, { useState, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Input from "./Components/Input";
import VideoJS from "./Components/Video";
import './App.css';
import Image from "./Assets/running-gif.gif"

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const playerRef = useRef(null);
  const [replay,setReplay]=useState(false)
  let arr = [];

 

  const handlePlayerReady = () => {

    const player = videojs(playerRef.current, {}, () => {

      // When time changes on the plaing time this event will triger and call handleTimeUpdate 
      player.on("timeupdate", handleTimeUpdate);
      // When video ending   time this event will triger and call handleTimeUpdate 
      player.on("ended", handleVideoEnd);

      // Enable autoplay when there's user interaction
      player.el().addEventListener("click", () => {
        player.play();
      });
    });
  };


  // This function is using to  Time based updating  

  const handleTimeUpdate = () => {
    const player = videojs(playerRef.current);

    const currentTime = player.currentTime();
    const duration = player.duration();
  

    const newPercentage = Math.ceil((currentTime / duration) * 100);
    if (newPercentage >= 25 && !arr.includes(25)) {
      console.log("Video reached 25%");
      arr.push(25);
    } else if (newPercentage >= 50 && !arr.includes(50)) {
      console.log("Video reached 50%");
      arr.push(50);
    } else if (newPercentage >= 75 && !arr.includes(75)) {
      console.log("Video reached 75%");
      arr.push(75);
    } else if (newPercentage > 99) {
      player.pause();
      arr.splice(0,arr.length)
      setReplay(true)
 
    }
  };


  // this function get triger when video got ending time
  const handleVideoEnd = () => {
    console.log("Video playback completed");
  };


  // Replay function for this thing making current time 0  
  const handleReplay = () => {
    const player = videojs(playerRef.current);
    player.currentTime(0);
    player.play();
    setReplay(false)
  };

  return (

    <div>
      {/* Nav bar and Input new Video are happening through this seaction  */}
      <nav>
         <Input setVideoUrl={setVideoUrl} playerRef={playerRef} />
      </nav>
    <div className="video-player-container">
      
      
      {videoUrl ? <VideoJS  playerRef={playerRef} replay={replay} handlePlayerReady={handlePlayerReady} videoUrl={videoUrl} handleReplay={handleReplay} />:
      <div className="Nonvideo-wrapper">
        <img  src={Image} alt="Sample" />
        <h1>Please Choose Your Video </h1>
      </div>
      }
    </div>
    </div>
  );
};

export default App;
