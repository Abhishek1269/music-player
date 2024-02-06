import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Upload from './components/Upload';
import List from './components/List';
import AudioPlayer from './components/AudioPlayer';
import Header from './components/Header'

const App = () => {
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);

  useEffect(() => {
    const savedFile = JSON.parse(window.localStorage.getItem('lastPlayedFile'));
    setCurrentFile(savedFile);
  }, []);

  const handleFileUpload = (file) => {
    const newFile = { id: uuidv4(), name: file.name, file };
    setFiles((prevFiles) => [...prevFiles, newFile]);
  };

  const handleFileSelect = (selectedFile) => {
    setCurrentFile(selectedFile);
    localStorage.setItem('lastPlayedFile', JSON.stringify(selectedFile));
  };

  const handleAudioEnded = () => {
    const currentIndex = files.findIndex((file) => file.id === currentFile.id);
    if (currentIndex < files.length - 1) {
      const nextFile = files[currentIndex + 1];
      setCurrentFile(nextFile);
      window.localStorage.setItem('lastPlayedFile', JSON.stringify(nextFile));
    }
  };

  return (
    <div>
      <Header/>
      <Upload onFileUpload={handleFileUpload} />
      <List files={files} onFileSelect={handleFileSelect} />
      <AudioPlayer file={currentFile ? currentFile.file : null} onEnded={handleAudioEnded} />
    </div>
  );
};
 
export default App;