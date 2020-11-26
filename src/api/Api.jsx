import React from 'react';
import { UserPost } from './endpoints/UserPost';
import { TokerPost } from './endpoints/TokerPost';
import { PhotoPost } from './endpoints/PhotoPost';
import { PhotoGet } from './endpoints/PhotoGet';

export const Api = () => {
  return (
    <div>
      <h1>USER POST</h1>
      <UserPost />
      <h1>TOKEN POST</h1>
      <TokerPost />
      <h1>PHOTO POST</h1>
      <PhotoPost />
      <h1>PHOTO GET</h1>
      <PhotoGet />
    </div>
  );
};
