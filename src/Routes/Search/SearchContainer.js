import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, TVApi } from '../../api';
import { useEffect } from 'react';

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {
          data: { results: movieResults },
        } = await movieApi.search(searchTerm);
        const {
          data: { results: tvResults },
        } = await TVApi.search(searchTerm);
        setMovieResults(movieResults);
        setTvResults(tvResults);
      } catch (e) {
        setError('Can not find result. There is an error.');
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <>
      <SearchPresenter
        searchTerm={searchTerm}
        handleChange={handleChange}
        movieResults={movieResults}
        tvResults={tvResults}
        error={error}
        loading={loading}
      />
    </>
  );
};

export default SearchContainer;
