import React, { Component } from 'react';
import Proptypes from 'prop-types';
import styled from 'styled-components';

export default class ListItem extends Component {
  render() {
    return (
      <Main>
        <Div>
          <Image src={this.props.image} alt="paris" />
        </Div>
      </Main>
    );
  }
}

const Main = styled.main`
  width: 16em;
  height: 12em;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;

const Div = styled.div`
  width: 8em;
  height: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 100%;
  display: flex;

`;
