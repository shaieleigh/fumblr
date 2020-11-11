import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function HomeButton() {
  const currentUserId = useSelector(state => state.auth.id);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if(currentUserId) {
      return (
        <Redirect to='/' />
      )
    } else {
      return (
        <Redirect to='/login' />
      )
    }
  }

  return (
  <button className='personalInfo' onClick={handleButtonClick}>
      <svg className='homeButton' width="20" height="21" viewBox="0 0 20 21"><path d="M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943"></path></svg>
    </button>
  )
}
