import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Search = props => (
  <Main className="search">
    <Span>
        Search
    </Span>
    <Input className="searchBar" />
  </Main>
);

export default Search;

const Main = styled.main`
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-size: 18px;
  padding: .5em;
`;

const Input = styled.input`
  width: 55em;
  height: 2.5em;
  outline: none;
  box-shadow: 3px 3px 3px grey;
`;
