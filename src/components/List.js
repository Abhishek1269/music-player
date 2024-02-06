import React from 'react';
import listCss from '../Assets/Audio.module.css';

const List = ({ files, onFileSelect }) => {
  return (
    <div className={listCss.listDesign}>
          <h1 className='brand-font text-white'>Music App</h1>
          <ul className='text-white'>
      {files.map((file) => (
        <li key={file.id} onClick={() => onFileSelect(file)}>
          {file.name}
        </li>
      ))}
    </ul>
      </div>
  );
};

export default List;