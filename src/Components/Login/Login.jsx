import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';

export const Login = () => {
  return (
    <Switch>
      <Route path="/login/criar" component={LoginCreate}></Route>
      <Route path="/login/perdeu" component={LoginPasswordLost}></Route>
      <Route path="/login/resetar" component={LoginPasswordReset}></Route>
      <Route path="/" component={LoginForm}></Route>
    </Switch>
  );
};
