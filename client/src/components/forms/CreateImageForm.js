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
   let imageBlob;
   console.log('allowedFileType', allowedFileTypes.indexOf(imagePost.type))
   if(allowedFileTypes.indexOf(imagePost.type) > -1){
     imageBlob = new Blob([JSON.stringify(image)], {type: 'image/png'});
   }

  let data = new FormData();
  console.log('MYBLOB', imageBlob);
  data.append('upl', imagePost, imagePost.name);
    // data.set('data', e.target.value);
    // data.append('file', image);
    // data.append('userId', userId);
    for (var [key, value] of data.entries()) {
      console.log('key, value', key, value);
    }
    console.log('data', data);
    console.log('data.entries()', data.entries());
    setWhichImgForm('ImgFile');
    setImage(image);
    dispatch(createImageBlog(data));
    console.log('e.target', e.target);
    console.log('e.target.value', e.target.value);
    console.log('image', image);
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
