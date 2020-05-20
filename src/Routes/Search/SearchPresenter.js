import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';
import Loading from '../../Components/Loading';

const StyledSearchPresenter = styled.div`
  padding: 20px;
`;

const StyledForm = styled.form`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
`;

const StyledInput = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const StyledSelectDiv = styled.div`
  position: relative;
  display: flex;
  width: 20em;
  height: 3em;
  line-height: 3;
  background: #2c3e50;
  overflow: hidden;
  border-radius: 0.25em;
  margin-right: 2rem;

  &:hover::after {
    color: #3498db;
  }

  select {
    flex: 1;
    padding: 0 0.5em;
    color: #fff;
    cursor: pointer;
  }

  &::after {
    content: '\\25bc';
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #34495e;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
  }
`;

const SearchPresenter = ({
  searchTerm,
  handleChange,
  movieResults,
  tvResults,
  error,
  loading,
  searchType,
  handleOptionChange,
}) => {
  return (
    <StyledSearchPresenter>
      <StyledForm>
        <StyledSelectDiv>
          <select value={searchType} onChange={handleOptionChange}>
            <option value="all">All</option>
            <option value="moive">Movie</option>
            <option value="tv">TV</option>
          </select>
        </StyledSelectDiv>
        <StyledInput
          placeholder="Search Movies or TV shows..."
          onChange={handleChange}
          value={searchTerm}
        />
      </StyledForm>
      {loading ? (
        <Loading />
      ) : (
        <>
          {searchType !== 'tv' && movieResults && movieResults.length > 0 && (
            <Section title="Movie Result">
              {movieResults.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {searchType !== 'movie' && tvResults && tvResults.length > 0 && (
            <Section title="TV Result">
              {tvResults.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imageUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date
                      ? show.first_air_date.substring(0, 4)
                      : 'not found'
                  }
                />
              ))}
            </Section>
          )}
          {error && <Message color="#e74c3c" text={error} />}
          {tvResults &&
            movieResults &&
            tvResults.length === 0 &&
            movieResults.length === 0 &&
            searchTerm.length > 0 && (
              <Message text="Nothing found" color="#95a5a6" />
            )}
        </>
      )}
    </StyledSearchPresenter>
  );
};

SearchPresenter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchType: PropTypes.string,
  handleOptionChange: PropTypes.func.isRequired,
};
export default SearchPresenter;
