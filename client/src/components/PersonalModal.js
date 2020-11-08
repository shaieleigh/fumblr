import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/auth';

export default function PersonalModal({ handleClick }) {
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();
  const logout = async () => {
    await fetch(`/api/session`, {
      method: 'DELETE',
      headers: {
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      }
    });
    dispatch(setUser({}));
  };
  if (!currentUserId) {
    return (
      <Redirect to='/login' />
    )
  }


  return (
    <>
      <div className='personalModal' onClick={handleClick} >
      </div>
      <div className='personalModalShow'>
        <div className='accountNav'>
          <p>Account</p>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
    </>
  )
}
