import React from 'react';
import styled from 'styled-components';

const StyledLoading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Loading = () => {
  return <StyledLoading>Loading....</StyledLoading>;
};

export default Loading;
