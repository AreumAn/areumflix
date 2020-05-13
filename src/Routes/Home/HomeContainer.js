import React, { useState, useEffect } from 'react';
import { movieApi } from '../../api';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);
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
        setNowPlaying(nowPlaying);
        setUpcoming(upcoming);
        setPopular(popular);
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
    <HomePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
};

export default HomeContainer;
