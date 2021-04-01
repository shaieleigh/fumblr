import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createImageBlog } from '../../store/createBlogs';
import ImgLinkIcon from '../icons/ImgLinkIcon';
import CameraFormIcon from '../icons/CameraFormIcon';
import '../../assets/css/modals.css';

// import CameraIcon from '../icons/CameraIcon';

export default function CreateImageForm() {
  const dispatch = useDispatch();
  let userId = useSelector(state => state.auth.id);
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
    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/gif'];
    console.log('image', image);
    console.log('allowedFileType', allowedFileTypes.indexOf(imagePost.type))

    let data = new FormData();
    data.append('upl', imagePost, imagePost.name);
    data.append('userId', userId);

    setWhichImgForm('ImgFile');
    setImage(image);
    dispatch(createImageBlog(data));

  }


  return (
    <>
      {whichImgForm === 'main'?
        <div className='imgModal'>
            <div className='imgFile'>
              <label className='fileContainer'>
                <input type='file' accept='image/*' className='imgUpload' onChange={handleImgFile} name='image'>
                </input>
                  <CameraFormIcon className='imgFormIcon'/>
              </label>
            </div>
            <div className='imgLink' onClick={handleImgLinkForm}>
              <ImgLinkIcon />
            </div>
        </div> :
        <div><img id={'imgFile'} className={whichImgForm === 'ImgFile'? 'imgFile' : null } src={whichImgForm === 'ImgFile'? image : null } /></div> }
    </>
  )
}
