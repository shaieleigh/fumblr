import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './auth.css';
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
  const handleDemoUserLink = e => {
    e.preventDefault();
    dispatch(login('Demo-lition', 'password'))
  }
  if (currentUserId) return <Redirect to='/' />;

  return (
    <div className='gothGirl'>
      <nav>
        <div className='logo'>f</div>
        <Link to='/signup' className='signup'>Sign up</Link>
      </nav>
      <div className='loginBox'>
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
        <div className='demouserLink' onClick={handleDemoUserLink}>
        <Link className='demouserBox'>
          <svg width="1.5em" height="1..5625em" viewBox="0 0 16 17" className="bi bi-compass" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
            <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
          </svg></Link>
          <Link to='/' className='textDecoration'>
          <span>Here's what's trending</span>
        </Link>
        </div>
      </div>
    </div>
  )
}
