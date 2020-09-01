import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function Pages() {
  return (
    <>
    {/* <Route path="/"><h1>My Home Page</h1></Route> */}
    <Route  path='/login' component={LoginPage} />
    </>
  )
}
