import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 15px;
  text-transform: uppercase;
  color: #800080;
`;

const StyledGrid = styled.div`
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <StyledSection>
    <StyledTitle>{title}</StyledTitle>
    <StyledGrid>{children}</StyledGrid>
  </StyledSection>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
