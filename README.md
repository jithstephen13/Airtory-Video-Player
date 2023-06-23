## [Deployed Link](https://airtvideo.netlify.app/).


### The App component serves as the main entry point, managing the video URL state and handling player events.

### The Input component allows the user to select a video file and triggers a callback function to set the video URL.

### The VideoJS component renders the video player using the Video.js library. It includes event handlers for player readiness and video ending, as well as a replay button when the video playback completes.

### The video player component utilizes the video-wrapper CSS class and applies smooth transitions using the transform property and appropriate classes (vjs-has-started, vjs-paused, vjs-ended).

### The application displays a sample image and a message until a video is chosen.
