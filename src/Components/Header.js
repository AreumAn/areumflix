import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const StyledItem = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5 ease-in-out;
  & + & {
    margin: 0rem 2rem;
  }
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <StyledHeader>
      <List>
        <StyledItem current={pathname === '/'}>
          <SLink to="/">Home</SLink>
        </StyledItem>
        <StyledItem current={pathname === '/movie'}>
          <SLink to="/movie">Movie</SLink>
        </StyledItem>
        <StyledItem current={pathname === '/tv'}>
          <SLink to="/tv">TV</SLink>
        </StyledItem>
        <StyledItem current={pathname === '/search'}>
          <SLink to="/search">Search</SLink>
        </StyledItem>
      </List>
    </StyledHeader>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

export default withRouter(Header);
