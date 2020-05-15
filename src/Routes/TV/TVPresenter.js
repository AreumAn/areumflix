import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../../Components/Loading';
import Message from '../../Components/Message';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const StyledTVPresenter = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ sectionArr, tvList, loading, error }) => {
  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledTVPresenter>
      {sectionArr.map((section, idx) => (
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
    </StyledTVPresenter>
  );
};

TVPresenter.propTypes = {
  sectionArr: PropTypes.array,
  tvList: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
