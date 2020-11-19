import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';

import DotComponent from '../components/DotComponent';
import About from './About'
import { login } from '../store/auth';

import './auth.css';
import './signup.css';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState(false);
  const [whatForm, setWhatForm] = useState('gettingStarted');
  const dot = useSelector(state => state.dotReducer.dot);
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();
  console.log('dot', dot);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup(username, password, email))
  }

  // const handleClick = e => {
  //   e.preventDefault();

  // }
  const handleDemoUserLink = e => {
    e.preventDefault();
    dispatch(login('Demo-lition', 'password'))
  }

  const goToSignUp = (e) => {
    e.preventDefault();
    setWhatForm('signUp');
  }

  if (currentUserId) return <Redirect to='/dashboard' />;

  return (
    <>
      <div className='pita'>
        <DotComponent text='Hello' />
        <div className='clickToAboutPage' onClick={e => setAbout(true)}></div>
        <nav className='generalNav'>
          <Link className='logo' to={currentUserId ? '/' : '/login'}>f</Link>
          <div className='buttonNav'>
            {dot === 'about' || whatForm === 'signUp' ?
              <Link to='/login' className='login'>Log in</Link>
              : null}
            {dot === 'about' ? <button className='aboutSignUpButton'>Sign Up</button>
            : null }
          </div>
        </nav>
        <div className={dot === 'about' ? 'swivelUp celticAfter' : 'swivelUp'}>
          <div className='celtic'>
            <div className='signUpPage'>
              <h1>fumblr</h1>
              <div className='mottoQuote'>
                <p className='signupP'>Come for what you love.</p>
                <p className='signupP'>Stay for what you discover.</p>
              </div>
              { whatForm === 'gettingStarted'?
                <div>
                  <button onClick={goToSignUp} className='loginSignup'>Get Started</button>
                  <Link to='/login' className='loginStart'>Log In</Link>
                  <div className='demouserLink' onClick={handleDemoUserLink}>
                    <Link to='/' className='demouserBox'>
                      <svg width="1.5em" height="1.5625em" viewBox="0 0 16 17" className="bi bi-compass" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                      <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                      </svg>
                    </Link>
                    <Link to='/' className='textDecoration'>
                      <span>Log in with demo user</span>
                    </Link>
                  </div>
                </div>
              : null }
              {whatForm === 'signUp'?
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
              : null }
              { whatForm === 'login'?
              <Redirect to='/login' />
              : null }
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
