import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './loginPage.css';




export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password))
  }

  if (currentUserId) return <Redirect to='/' />;

  return (
    <div className='gothGirl'>
      <nav>
        <div className='logo'>f</div>
        <Link to='/signup' className='signup'>Sign up</Link>
      </nav>
      <div>
        <h1>fumblr</h1>
        <form onSubmit={handleSubmit}>
          <input
            label='Email'
            name='username'
            value={username}
            placeholder='Email'
            onChange={e => setUsername(e.target.value)} />
          <input variant='filled'
            type='password'
            label='password'
            name='password'
            value={password}
            placeholder='Password'
            onChange={e => setPassword(e.target.value)} />
          <button className='loginSignup'>Log in</button>
        </form>
      </div>
    </div>
  )
}
