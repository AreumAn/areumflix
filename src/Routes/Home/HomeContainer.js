import React, { useState, useEffect } from 'react';
import { movieApi, TVApi } from '../../api';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const [movieList, setMovieList] = useState({});
  const [tvList, setTvList] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const sectionMovieArr = ['nowPlaying', 'upcoming', 'popular'];
  const sectionTVArr = ['topRated', 'popular', 'airingToday'];

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
        const {
          data: { results: topRated },
        } = await TVApi.topRated();
        const {
          data: { results: popularTV },
        } = await TVApi.popular();
        const {
          data: { results: airingToday },
        } = await TVApi.airingToday();
        setTvList({
          topRated: topRated,
          popular: popularTV,
          airingToday: airingToday,
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
    <HomePresenter
      sectionMovieArr={sectionMovieArr}
      movieList={movieList}
      sectionTVArr={sectionTVArr}
      tvList={tvList}
      error={error}
      loading={loading}
    />
  );
};

export default HomeContainer;
