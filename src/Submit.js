import React, { Component } from 'react'
import {PhotoPicker} from 'aws-amplify-react'
import styled from 'styled-components'
import StyledButton from './StyledButton'

export class Submit extends Component {
  render() {
    return (
      <Wrapper>
        <PhotoPicker preview/>
        <p style={{textAlign: 'center'}}>
        <StyledButton text="Submit challenge" change={() => this.props.history.push("/myChallenges")}/>
        </p>
        
      </Wrapper>
    )
  }
}

export default Submit


const Wrapper = styled.div`
  width: 90%;
  padding-top: 2rem;
  margin: 0 auto;
`