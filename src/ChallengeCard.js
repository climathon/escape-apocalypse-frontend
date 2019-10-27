import React, { Component } from 'react'
import styled from 'styled-components'
  

export class ChallengeCard extends Component {
  render() {
    const { name, iconUrl, category } = this.props.challenge;
    let icon = iconUrl
    let title = category
    let description = name
    return (
      <Card>
        <ChallengeImage>
          <img src={icon} alt="Garbage" width="100%"/>
        </ChallengeImage>
        <ChallengeText>
          <h3>Challenge: <br/>{title}</h3>
          <hr/>
          <p>{description}<a href="/challenge"> Mehr.</a></p>
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
  width: 20%
`

const ChallengeText = styled.div`
  width: 80%;
  padding: 1rem;
`