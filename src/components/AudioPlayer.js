import React, { useRef, useEffect } from 'react';
import AudioCss from "../Assets/Audio.module.css";

const AudioPlayer = ({ file, onEnded }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (file) {
      try {
        audioRef.current.src = URL.createObjectURL(file)
        audioRef.current.play();
      } catch (error) {
        console.error("Error setting up audio:", error);
      }
    }
  }, [file]);
  return <audio className= {AudioCss.audioDesign} ref={audioRef} controls onEnded={onEnded} />;
};

export default AudioPlayer;