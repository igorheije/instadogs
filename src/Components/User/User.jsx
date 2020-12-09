import React from 'react';
import { Route } from 'react-router-dom';
import { Feed } from '../Feed/Feed';
import { UserHeader } from './UserHeader';
import { UserPhotoPost } from './UserPhotoPost';
import { UserStats } from './UserStats';

export const User = () => {
  return (
    <section className="container">
      <UserHeader />

      <Route exact path="/conta">
        <Feed />
      </Route>
      <Route path="/conta/postar">
        <UserPhotoPost />
      </Route>
      <Route path="/conta/estatistica">
        <UserStats />
      </Route>
    </section>
  );
};
