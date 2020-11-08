import React from 'react';
import Cookies from 'js-cookie';
import { setUser } from '../../store/auth';
import { useDispatch, useSelector } from 'react-redux';



export default function AudioIcon() {
  const dispatch = useDispatch()

    const logout = async () => {
      await fetch(`/api/session`, {
        method: 'DELETE',
        headers: {
          'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
      });
      dispatch(setUser({}));
    };



  return (
    <>
      <button className='dashNavButtons' onClick={logout}>
        <svg className='dashboardIcons' viewBox="0 0 19 16" width="40" height="35" fill="var(--purple)"><path d="M17.7 7.3c-.4-4.4-4-7.3-8.3-7.3-4.3 0-7.9 2.9-8.3 7.4C.5 7.4 0 8 0 8.6v5c0 .8.6 1.4 1.3 1.4H4c.2.4.8 1 1.2 1 .6 0 .8-1 .8-1.6V7.8c0-.5-.2-1.6-.8-1.6-.4 0-1 .8-1.2 1.1H2.9c.4-3.5 3.2-5.6 6.5-5.6s6.2 2.1 6.5 5.6H15c0-.3-.7-1.1-1.1-1.1-.6 0-.9 1-.9 1.6v6.6c0 .5.3 1.6.9 1.6.4 0 1.1-.6 1.2-1h2.6c.7 0 1.3-.6 1.3-1.3v-5c0-.8-.6-1.3-1.3-1.4zM3 8.5v1l-2 1.3V8.5h2zm15 .9l-2 1.3V8.5h2v.9zm-6.4.3l-1.6.5V6.4c0-.1-.1-.2-.2-.2s-.2 0-.2.1L7.2 12v.2c.1.1.1.1.2.1L9 12v3.8c0 .1-.2.2-.1.2h.3c.1 0 .2 0 .2-.1l2.4-5.9v-.2c-.1-.1-.2-.1-.2-.1z"></path></svg>
      <p className='dashbIconFont'>Audio</p></button>
    </>
  )
}
