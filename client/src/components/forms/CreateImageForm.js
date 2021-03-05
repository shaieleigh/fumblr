import React from 'react';
import '../../assets/css/modals.css';

import CameraFormIcon from '../icons/CameraFormIcon';
import CameraIcon from '../icons/CameraIcon';

export default function CreateImageForm() {
  return (
    <div className='imgModal'>
      <div className='imgFile'>
        <label className='fileContainer'>
          <input type='file' accept='image/*' className='imgUpload'>
          </input>
            <CameraFormIcon className='imgFormIcon'/>
        </label>
      </div>
      <div className='imgLink'>
      </div>
    </div>
  )
}
