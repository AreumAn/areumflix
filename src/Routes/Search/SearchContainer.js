import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, TVApi } from '../../api';
import { useEffect } from 'react';
import useDebounce from '../../utils/debounce';

const SearchContainer = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [searchType, setSearchType] = useState('all');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSearchType(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const {
            data: { results: movieResults },
          } = await movieApi.search(debouncedSearchTerm);
          const {
            data: { results: tvResults },
          } = await TVApi.search(debouncedSearchTerm);
          setMovieResults(movieResults);
          setTvResults(tvResults);
        } catch (e) {
          setError('Can not find result. There is an error.');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [debouncedSearchTerm, searchType]);

  return (
    <>
      <SearchPresenter
        searchTerm={searchTerm}
        handleChange={handleChange}
        movieResults={movieResults}
        tvResults={tvResults}
        error={error}
        loading={loading}
        handleOptionChange={handleOptionChange}
        searchType={searchType}
      />
    </>
  );
};

export default SearchContainer;
