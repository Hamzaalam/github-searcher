import React from 'react';
import SearchPage from './pages/searchPage';
import styled from 'styled-components';
import { Flex } from "../src/components/FlexBox";

const Wrapper = styled(Flex)`
  justify-content:center;
  height:99vh;
`;

function App() {
  return (
    <Wrapper >
      <SearchPage />
    </Wrapper>
  );
}

export default App;
