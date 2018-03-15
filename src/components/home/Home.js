import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';
import Search from '../common/Search';
import Content from '../common/Content';

const Home = () => (
  <Container>
    <Title />
    <Search />
    <Content />
  </Container>

);

export default Home;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
