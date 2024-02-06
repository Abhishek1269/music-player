import React from 'react';
import uploadCss from '../Assets/Audio.module.css';

const Upload = ({ onFileUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
      <div className={uploadCss.uploadDesign}>
      <input className='text-white' type="file" accept=".mp3" onChange={handleFileChange} />
    </div>
  );
};

export default Upload;