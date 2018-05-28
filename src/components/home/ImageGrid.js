import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';
import ImageItem from './ImageItem';

import image from '../../resources/IMG_4403.jpg';


export default class ImageGrid extends Component {
  componentDidMount() {
    //
  }

  render() {
    return (
      <MainContent id="content">
        <ImageItem imageSrc={image} text="LA" />
      </MainContent>
    );
  }
}

const MainContent = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
