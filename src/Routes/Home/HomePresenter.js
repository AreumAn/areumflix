import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loading from '../../Components/Loading';
import Message from '../../Components/Message';

const StyledHomePresenter = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ movieList, loading, error }) => {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }
  console.log(movieList);
  return <StyledHomePresenter>haha</StyledHomePresenter>;
};

HomePresenter.propTypes = {
  movieList: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
