import React, { Component } from 'react'
import styled from 'styled-components'
import { Message } from 'semantic-ui-react'
import Background from './Background'

export class MyChallenges extends Component {

  render() {
    return (
      <Background>
      <Wrapper>
        <h2 style={{marginBottom: '2rem'}}>My Challenges</h2>
        <h3>Pending</h3>
        <Message
          warning
          style={{textAlign: 'left'}}
          icon='clock outline'
          header='Challenge: Verpackungsmüll'
          content='Wohin mit dem ganzen Plastik?' />
        <h3>
          Finished
        </h3>
        <Message
          positive
          style={{textAlign: 'left'}}
          icon='check'
          header='Challenge: Kleidung'
          content='Kleider machen Plastik - nicht mit uns!'
          onClick={() => this.props.history.push('/success')} />
        <Message
          positive
          style={{textAlign: 'left'}}
          icon='check'
          header='Challenge: Kosmetik'
          content='Müssen wir uns Plastik auf die Haut schmieren? '
          onClick={() => this.props.history.push('/success')} />
        <Message
          negative
          style={{textAlign: 'left'}}
          icon='cancel'
          header='Challenge: Co2-Fußabdruck'
          content='Reduziere deinen CO2-Fußabdruck'
          onClick={() => this.props.history.push('/failure')}
        />
      </Wrapper>
      </Background>
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
