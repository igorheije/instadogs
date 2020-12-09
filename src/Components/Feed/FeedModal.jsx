import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';
import { PHOTO_GET } from '../../api';
import { Error } from '../Help/Error';
import { Loading } from '../Help/Loading';
import { PhotoContent } from '../Photo/PhotoContent';

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
