import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';
import Search from '../common/Search';
import ImageGrid from './ImageGrid';

const Home = () => (
  <Container>
    <TitleSection>
      <Title />
      <Search />
    </TitleSection>
    <ImageGrid />
  </Container>

);

export default Home;

const TitleSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(54, 54, 55);
  overflow: auto;
`;
