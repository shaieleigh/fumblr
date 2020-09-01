import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { Redirect, Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import AuthSubmitButton from '../components/auth/AuthSubmitButton';
import AuthTextField from '../components/auth/AuthTextField';
import { makeStyles } from '@material-ui/core/styles'
import './loginPage.css';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})


export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const currentUserId = useSelector(state => state.auth.id)
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(username, password))
  }

  if (currentUserId) return <Redirect to='/' />;

  return (
    <Container fixed
      classes={{ root: classes.container}}
      maxWidth='sm'
      // styles={{ display: 'flex', flexDirection: 'column' }}
      >
      <h1>fumblr</h1>
      <form onSubmit={handleSubmit}>
        <AuthTextField
          label='Email'
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)} />
        <AuthTextField variant='filled'
          type='password'
          label='password'
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <AuthSubmitButton>Log In</AuthSubmitButton>
        <Link to='/signup'>Sign up</Link>
      </form>
    </Container>
  )
}
