import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

export default class ListItem extends Component {
  render() {
    return (
      <ImageContainer id="imageItem">
        <Image id="cityImage" src={this.props.imageSrc} alt="paris" />
        <Text id="cityImageText">{this.props.text}</Text>
      </ImageContainer>
    );
  }
}

const ImageContainer = styled.div`
  width: 16em;
  height: 16em;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
`;

const Text = styled.span`
  position: absolute;
  height: 5em;
  width: 6em;
  top: calc(50% - 2.5em);
  left: calc(50% - 3em);
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-color: white;
`;
