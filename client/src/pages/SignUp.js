import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import DotComponent from './DotComponent';
import About from './About'
import './auth.css';
import './signup.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState(false);
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(username, password, email))
  }

  // const handleClick = e => {
  //   e.preventDefault();

  // }

  if (currentUserId) return <Redirect to='/' />;

  return (
    <>
      <div className='pita'>
        <DotComponent />
        <div className='clickToAboutPage' onClick={e => setAbout(true)}></div>
        <nav>
          <Link className='logo' to={currentUserId ? '/' : '/login'}>f</Link>
          <Link to='/login' className='login'>Log in</Link>
        </nav>
        <div className={about ? 'swivelUp celticAfter' : 'swivelUp'}>
          <div className='celtic'>
            <div className='signUpPage'>
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
          <div className='clickToAboutPage' onClick={e => setAbout(true)}><span className='whatIsTumblr'>What is Tumblr?</span></div>
        </div>
        <div className='aboutPage'>
          <About />
        </div>

      </div>
    </>

  )
}
