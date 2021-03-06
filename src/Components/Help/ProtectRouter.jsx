import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export const ProtectRouter = (props) => {
  const { login } = React.useContext(UserContext);

  if (login === false) {
    return <Redirect to="/login" />;
  } else if (login === true) {
    return <Route {...props} />;
  } else return null;
};
