import React, { useState, useEffect } from 'react';
import { movieApi } from '../../api';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const [movieList, setMovieList] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        const {
          data: { results: upcoming },
        } = await movieApi.upcoming();
        const {
          data: { results: popular },
        } = await movieApi.popular();
        setMovieList({
          nowPlaying: nowPlaying,
          upcoming: upcoming,
          popular: popular,
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <HomePresenter movieList={movieList} error={error} loading={loading} />
  );
};

export default HomeContainer;
