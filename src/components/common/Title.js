import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Title = props => (
  <Main className="title">
    <section>
      <Span>{props.title}</Span>
    </section>
  </Main>
);

Title.propTypes = {
  title: Proptypes.string,
};

Title.defaultProps = {
  title: 'App',
};

export default Title;

const Main = styled.main`
  width: 100%;
  height: 5em;
  background-color: #458588;
  color: #003333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 2em;
  font-weight: 600;
`;
