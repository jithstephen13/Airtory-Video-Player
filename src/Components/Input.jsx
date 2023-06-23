const Input = ({ setVideoUrl, playerRef}) => {

        // getting the file  and converting that file in to obtect format 
        
    const handleUpload = (event) => {
      const file = event.target.files[0];
      const videoURL = URL.createObjectURL(file);
      setVideoUrl(videoURL);
    };
  
    return (
      <div className="Input-Cont">
        <input type="file" accept="video/*" onChange={handleUpload} id="file-upload" />
        <label htmlFor="file-upload">Choose Video</label>
      </div>
    );
  };
  
  export default Input;
  