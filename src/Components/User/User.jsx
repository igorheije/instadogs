import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { Feed } from '../Feed/Feed';
import { Head } from '../Help/Head';
import { NotFound } from '../NotFound';
import { UserHeader } from './UserHeader';
import { UserPhotoPost } from './UserPhotoPost';
import { UserStats } from './UserStats';

export const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Switch>
        <Route exact path="/conta">
          <Feed user={data.id} />
        </Route>
        <Route path="/conta/postar">
          <UserPhotoPost />
        </Route>
        <Route path="/conta/estatistica">
          <UserStats />
        </Route>
        <Route path="/conta/*" component={NotFound}></Route>
      </Switch>
    </section>
  );
};
