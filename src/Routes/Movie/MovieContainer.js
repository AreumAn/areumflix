import React, { useState, useEffect } from 'react';
import { movieApi } from '../../api';
import MoviePresenter from './MoviePresenter';

const MovieContainer = () => {
  const [movieList, setMovieList] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const sectionArr = ['nowPlaying', 'upcoming', 'popular'];

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
        setError('Can not find result. There is an error.');
      } finally {
        setLoading(false);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <MoviePresenter
      sectionArr={sectionArr}
      movieList={movieList}
      error={error}
      loading={loading}
    />
  );
};

export default MovieContainer;
