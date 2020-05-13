import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../../Components/Loading';

const StyledHomePresenter = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => {
  if (loading) {
    return <Loading />;
  }
  console.log(nowPlaying, upcoming, popular, error);
  return <StyledHomePresenter>haha</StyledHomePresenter>;
};

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
