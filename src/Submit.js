import React, { Component } from 'react'
import {PhotoPicker} from 'aws-amplify-react'
import styled from 'styled-components'
import StyledButton from './StyledButton'
import Background from './Background'

export class Submit extends Component {
  render() {
    return (
      <Background>
        <Wrapper>
          <PhotoPicker preview/>
          <p style={{textAlign: 'center'}}>
            <StyledButton text="Fertig!" change={() => this.props.history.push("/myChallenges")}/>
          </p>
        </Wrapper>
      </Background>
    )
  }
}

export default Submit

const Wrapper = styled.div`
  width: 90%;
  padding-top: 2rem;
  margin: 0 auto;
`