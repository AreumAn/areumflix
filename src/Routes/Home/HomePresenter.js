import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../../Components/Loading';
import Message from '../../Components/Message';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const StyledHomePresenter = styled.div`
  padding: 20px;
`;

const StyledTypeTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 15px;
  text-transform: uppercase;
  color: #ffc107;
  text-align: center;
  text-decoration: underline;
`;

const HomePresenter = ({
  sectionMovieArr,
  movieList,
  sectionTVArr,
  tvList,
  loading,
  error,
}) => {
  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledHomePresenter>
      <StyledTypeTitle>Movies</StyledTypeTitle>
      {sectionMovieArr.map((section, idx) => (
        <Section key={idx} title={section}>
          {movieList[section].map((movie) => (
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
      ))}
      <StyledTypeTitle>TV Shows</StyledTypeTitle>
      {sectionTVArr.map((section, idx) => (
        <Section key={idx} title={section}>
          {tvList[section].map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      ))}
    </StyledHomePresenter>
  );
};

HomePresenter.propTypes = {
  sectionMovieArr: PropTypes.array,
  sectionTVArr: PropTypes.array,
  movieList: PropTypes.object,
  tvList: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
