import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import './signup.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(username, password, email))
  }

  if (currentUserId) return <Redirect to='/' />;

  return (
    <>
      <div className='celtic'>
        <nav>
          <div className='logo'>f</div>
          <Link to='/login' className='login'>Log in</Link>
        </nav>
        <div>
          <h1>fumblr</h1>
          <div className='mottoQuote'>
            <p>Come for what you love.</p>
            <p>Stay for what you discover.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              label='Email'
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={e => setEmail(e.target.value)} />
            <input
              type='password'
              label='password'
              name='password'
              value={password}
              placeholder='Password'
              onChange={e => setPassword(e.target.value)} />
            <input
              label='Username'
              type='text'
              name='username'
              value={username}
              placeholder='Username'
              onChange={e => setUsername(e.target.value)} />
            <button className='loginSignup'>Sign up</button>
          </form>
        </div>
      </div>
    </>

  )
}
