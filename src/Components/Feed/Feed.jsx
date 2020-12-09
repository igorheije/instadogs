import React from 'react';
import { FeedModal } from './FeedModal';
import { FeedPhotos } from './FeedPhotos';

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};
