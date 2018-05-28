import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Title = props => (
  <Main className="title">
    <Span>{props.title}</Span>
  </Main>
);

Title.propTypes = {
  title: Proptypes.string,
};

Title.defaultProps = {
  title: 'App Name Goes Here',
};

export default Title;

const Main = styled.main`
  width: 100%;
  height: 9em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 1.7em;
  color: white;
`;
