import React, { Component } from 'react'
import styled from 'styled-components'
import { Message, Button, Item, Icon } from 'semantic-ui-react'

export class MyChallenges extends Component {

  componentDidMount() {
    setTimeout(() => {this.props.history.push('success')}, 5000)
  }

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
          content='Das ist die Beschreibung von der Garbage Challenge.'
        />
        <h3>
          Finished
        </h3>
        <Message
          positive
          style={{textAlign: 'left'}}
          icon='check'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.'
        />
        <Message
          positive
          style={{textAlign: 'left'}}
          icon='check'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.'
        />
        
        <Message
          negative
          style={{textAlign: 'left'}}
          icon='cancel'
          header='Garbage Challenge'
          content='Das ist die Beschreibung von der Garbage Challenge.'
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
