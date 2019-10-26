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


const bgImage = "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=581&q=80"

const colors = {
  darkBlue: '20,34,48',
  medBlue: '34, 68, 96'
}

const Wrapper = styled.div`
  background-image: linear-gradient(to left top, rgba(${colors.darkBlue},.8), rgba(${colors.medBlue},.8)), url(${bgImage});
  background-position: center;
  background-size: cover;  
  height: 100vh;
  max-height: 100vh;
`
