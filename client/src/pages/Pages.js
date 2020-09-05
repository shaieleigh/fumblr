import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Dashboard from './Dashboard';


export default function Pages() {
  return (
    <>
    <Switch>
    <Route  path='/login' component={LoginPage} />
    <Route path='/signup' component={SignUp} />
    <Route path="/" component={Dashboard} />
    </Switch>
    </>
  )
}
