import React, { Component } from 'react'
import styled from 'styled-components'
import { Message } from 'semantic-ui-react'

export class MyChallenges extends Component {

  render() {
    return (
      <Wrapper>
        <h2 style={{marginBottom: '2rem'}}>
          My Challenges
        </h2>
        <h3>
          Pending
        </h3>
        <Message
          warning
          style={{textAlign: 'left'}}
          icon='clock outline'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.' />
        <h3>
          Finished
        </h3>
        <Message
          positive
          style={{textAlign: 'left'}}
          icon='check'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.'
          onClick={() => this.props.history.push('/success')} />
        <Message
          positive
          style={{textAlign: 'left'}}
          icon='check'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.'
          onClick={() => this.props.history.push('/success')} />
        <Message
          negative
          style={{textAlign: 'left'}}
          icon='cancel'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.'
          onClick={() => this.props.history.push('/failure')}
        />
      </Wrapper>
    )
  }
}

export default MyChallenges

const Wrapper = styled.div`
  text-align: center;
  color: white;
  padding-top: 2rem;
  width: 90%;
  margin: 0 auto;
`
