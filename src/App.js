import React from 'react';
import styled from 'styled-components';

function App(props) {
  return ( 
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
`


