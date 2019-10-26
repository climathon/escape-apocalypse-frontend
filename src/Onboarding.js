import React, { Component } from 'react';
import styled from "styled-components";
import { Card } from 'semantic-ui-react';

const Wrapper = styled.div`
  height: 100vh;
`

const Top = styled.div`
  height: 70vh;
  background: none;
`

const Bottom = styled.div`
  height: 30vh;
  max-height: 30vh;
  background: yellow;
`

export class Onboarding extends Component {
  render() {
    return (
      <Wrapper>
        <Top>

        </Top>
        <Bottom>
          <Card fluid style={{height: '100%', margin: '1rem auto'}}>
            Hi
          </Card>
        </Bottom>
      </Wrapper>
    )
  }
}

export default Onboarding
