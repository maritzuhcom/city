import React from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

const Search = props => (
  <Main>
    <Button className="searchButton">
      <i className="material-icons">search</i>
    </Button>
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

const Button = styled.button`
  background-color: rgb(54, 54, 55);
  outline: none;
  width: 3.5em;
  height: 2.5em;
  text-direction: none;
`;

const Input = styled.input`
  width: 15em;
  height: 2em;
  outline: none;
  font-size: 16px;
  box-shadow: 3px 3px 3px grey;
  border: none;
  background-image:none;
  background-color:transparent;
  box-shadow: none;
  border-bottom: 1px solid white;
  padding-left: 1em;
`;
