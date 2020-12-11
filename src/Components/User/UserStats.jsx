import React from 'react';
import { GET_STATS } from '../../api';
import { useFetch } from '../../Hooks/useFetch';
import { Error } from '../Help/Error';
import { Head } from '../Help/Head';
import { Loading } from '../Help/Loading';
import { UserStatsGraphs } from './UserStatsGraphs';
// const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return <div></div>;
};
