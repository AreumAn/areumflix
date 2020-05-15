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

const HomePresenter = ({ sectionArr, movieList, loading, error }) => {
  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledHomePresenter>
      {sectionArr.map((section, idx) => (
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
    </StyledHomePresenter>
  );
};

HomePresenter.propTypes = {
  sectionArr: PropTypes.array,
  movieList: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
