import { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const cloudinaryRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    if (cloudinaryRef.current) return;
    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "dyhwbwjca",
      autoplayMode: "on-scroll",
    });
  }, []);
  return <video ref={videoRef} data-cld-public-id="noso_zfmzes" controls />;
};

export default VideoPlayer;
