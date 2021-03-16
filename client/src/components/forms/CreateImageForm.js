import React, { useState } from 'react';
import '../../assets/css/modals.css';
import ImgLinkIcon from '../icons/ImgLinkIcon';

import CameraFormIcon from '../icons/CameraFormIcon';
import CameraIcon from '../icons/CameraIcon';

export default function CreateImageForm() {
  let [whichImgForm, setWhichImgForm] = useState('main');
  let [image, setImage] = useState('')
  const handleImgLinkForm = (e) => {
    e.preventDefault();
  }
  const ref = React.createRef();

  const handleImgFile = (e) => {
    e.preventDefault();
    // const image = e.currentTarget.files['0'];
    const image = e.target.value;
    console.log('image', e.currentTarget.files['0']);
    setWhichImgForm('ImgFile');
    setImage(image.name);
    console.log('e.target', e.target);
    console.log('e.target.value', e.target.value);
    // let file = document.getElementById('pita');
    // let imgFile = document.createElement('img');
    // imgFile.setAttribute('src', image.name);
    // imgFile.style.width = '100%';
    // imgFile.style.height = '100%';
    // console.log('file', file);
    // console.log('ref', ref);
    // file.appendChild(imgFile);
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
      {/* {whichImgForm === 'ImgFile'?
        <div className='ImgFileUpload' id='pita' ref={ref}></div>
      : null} */}
      <div><img src={whichImgForm === 'ImgFile'? image : null } /></div>
    </div>
  )
}
