import React, { Component } from 'react'
import styled from 'styled-components'

export class ChallengeCard extends Component {

 

  render() {
    return (
      <Card>
            <ChallengeImage>
              <img src="/garbage.png" width="100%"/>
            </ChallengeImage>
            <ChallengeText>
              <h3>Garbage Challenge</h3>
              <hr/>
              <p>Das ist eine Beschreibung der Garbage Challenge. Sie ist wirklich sehr toll. <a href="/challenge">Details</a></p>
            </ChallengeText>
          </Card>
    )
  }
}

export default ChallengeCard


const Card = styled.div`
  margin: 1rem 0rem
  background: white;
  border-radius: 5px;
  width: 100%;
  color: black;
  padding: 1rem;
  display: flex;
  align-items: center;
`

const ChallengeImage = styled.div`
  width: 25%
`

const ChallengeText = styled.div`
  width: 80%;
  padding: 1rem;
`