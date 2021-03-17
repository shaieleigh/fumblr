import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createImageBlog } from '../../store/createBlogs';
import ImgLinkIcon from '../icons/ImgLinkIcon';
import CameraFormIcon from '../icons/CameraFormIcon';
import '../../assets/css/modals.css';

// import CameraIcon from '../icons/CameraIcon';

export default function CreateImageForm() {
  const dispatch = useDispatch();
  let [whichImgForm, setWhichImgForm] = useState('main');
  let [image, setImage] = useState('');

  const handleImgLinkForm = (e) => {
    e.preventDefault();
  }
  // const ref = React.createRef();

  const handleImgFile = (e) => {
    e.preventDefault();
    const image = URL.createObjectURL(e.target.files[0]);
    const imagePost = e.currentTarget.files[0]
    console.log('e.currentTarget.files[0]', e.currentTarget.files[0]);
    setWhichImgForm('ImgFile');
    setImage(image);
    dispatch(createImageBlog(imagePost));
    console.log('e.target', e.target);
    console.log('e.target.value', e.target.value);
    console.log('image', image)
  }


  return (
    <>
      {whichImgForm === 'main'?
        <div className='imgModal'>
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
        </div> :
        <div><img className={whichImgForm === 'ImgFile'? 'imgFile' : null } src={whichImgForm === 'ImgFile'? image : null } /></div> }
    </>
  )
}
