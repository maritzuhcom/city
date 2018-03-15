import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import ListItem from '../common/ListItem';

import image from '../../resources/IMG_4403.jpg';


export default class Content extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <Main id="content">
        <MainContent>
          <ListItem image={image} text="LA" />
          <ListItem image={image} text="LA" />
          <ListItem image={image} text="LA" />
        </MainContent>
        <MainContent>
          <ListItem image={image} text="LA" />
          <ListItem image={image} text="LA" />
          <ListItem image={image} text="LA" />
        </MainContent>
      </Main>
    );
  }
}

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MainContent = styled.section`
  width: 90%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
