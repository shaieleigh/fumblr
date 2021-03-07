import React, { useState } from 'react';
import '../../assets/css/modals.css';
import ImgLinkIcon from '../icons/ImgLinkIcon';

import CameraFormIcon from '../icons/CameraFormIcon';
import CameraIcon from '../icons/CameraIcon';

export default function CreateImageForm() {
  let [whichImgForm, setWhichImgForm] = useState('main')
  const handleImgLinkForm = (e) => {
    e.preventDefault();
  }

  const handleImgFile = (e) => {
    e.preventDefault();
    const image = e.target.files[0].webkitRelativePath;
    let img = image['get webkitRelativePath'];
    console.log('img', img);
    console.log(e.target.files[0]);
    setWhichImgForm('ImgFile');
    let file = document.getElementsByClassName('ImgFileUpload');
    let imgFile = document.createElement('img');
    imgFile.setAttribute('src', image);
    imgFile.style.width = '100%';
    imgFile.style.height = '100%';
  }

  return (
    <div className='imgModal'>
      {whichImgForm === 'main'?
      <>
        <div className='imgFile'>
          <label className='fileContainer'>
            <input type='file' accept='image/*' className='imgUpload' onChange={handleImgFile}>
            </input>
              <CameraFormIcon className='imgFormIcon'/>
          </label>
        </div>
        <div className='imgLink' onClick={handleImgLinkForm}>
          <ImgLinkIcon />
        </div>
      </> : null }
      {whichImgForm === 'ImgFile'?
        <div className='ImgFileUpload'></div>
      : null}
    </div>
  )
}
