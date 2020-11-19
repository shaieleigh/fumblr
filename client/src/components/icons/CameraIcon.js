import React from 'react';
import { useDispatch } from 'react-redux';

import { setCreateImageModal } from '../../store/createModals';



export default function CameraIcon() {
  const dispatch = useDispatch()

  const handleShowModal = (e) => {
    e.preventDefault();
    dispatch(setCreateImageModal(true));
  }

  return (
    <>
      <button className='dashNavButtons' onClick={handleShowModal}>
        <svg className='dashboardIcons' viewBox="0 0 17 15" width="40" height="35" fill="var(--red)"><path className='dashNavPath' d="M14.6 1h-2.7l-.6-1h-6l-.6 1H2.4C1.1 1 0 2 0 3.3v9.3C0 13.9 1.1 15 2.4 15h12.2c1.3 0 2.4-1.1 2.4-2.4V3.3C17 2 15.9 1 14.6 1zM8.3 13.1c-2.9 0-5.2-2.3-5.2-5.1s2.3-5.1 5.2-5.1c2.9 0 5.2 2.3 5.2 5.1s-2.3 5.1-5.2 5.1zm5.9-8.3c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1s1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm-10 3.1c0 1.2.5 2.2 1.3 3 0-.2 0-.4-.1-.6 0-2.2 1.8-4 4.1-4 1.1 0 2 .4 2.8 1.1-.3-2-2-3.4-4-3.4-2.2-.1-4.1 1.7-4.1 3.9z"></path></svg>
        <p className='dashbIconFont'>Photo</p>
      </button>
    </>
  )
}