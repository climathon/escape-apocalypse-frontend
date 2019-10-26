import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

function App(props) {
  return ( 
    <Wrapper>
      {/* <Close>
        <Icon onClick={() => props.history.push("/")} name="cancel" size="big"/>
      </Close> */}
      {props.children}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  background: transparent;
`

const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: white;
` 


