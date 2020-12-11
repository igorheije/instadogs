import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginCreate } from './LoginCreate';
import { LoginForm } from './LoginForm';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';
import styles from './Login.module.css';
import { NotFound } from '../NotFound';
import { UserContext } from '../../UserContext';

export const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Redirect to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Switch>
          <Route exact path="/login" component={LoginForm}></Route>
          <Route path="/login/criar" component={LoginCreate}></Route>
          <Route path="/login/perdeu" component={LoginPasswordLost}></Route>
          <Route path="/login/resetar" component={LoginPasswordReset}></Route>
          <Route path="/login/*" component={NotFound}></Route>
        </Switch>
      </div>
    </section>
  );
};
