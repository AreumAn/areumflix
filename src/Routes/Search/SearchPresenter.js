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
`;

const StyledInput = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  searchTerm,
  handleChange,
  movieResults,
  tvResults,
  error,
  loading,
}) => {
  return (
    <StyledSearchPresenter>
      <StyledForm>
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
          {movieResults && movieResults.length > 0 && (
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
          {tvResults && tvResults.length > 0 && (
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
};
export default SearchPresenter;
