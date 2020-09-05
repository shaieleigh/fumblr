import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import { Switch } from 'react-router-dom';
import SignUp from './SignUp'


export default function Pages() {
  return (
    <>
    <Switch>
    <Route  path='/login' component={LoginPage} />
    <Route path='/signup' component={SignUp} />
    <Route path="/"><h1>My Home Page</h1></Route>
    </Switch>
    </>
  )
}
