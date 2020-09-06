import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PersonalModalButton from './PersonalModalButton';
import './dashboard.css';



export default function Dashboard() {
  const currentUserId = useSelector(state => state.auth.id);

  useEffect(() => {
    async function users() {
      const res = await fetch('/users')
      const data = await res.json();
      console.log(data);
    }
    users();
  });


  if (!currentUserId) return <Redirect to='/login' />;
  return (
    <nav>
      <div className='logo'>f</div>
      <PersonalModalButton />
    </nav>
  )
}
