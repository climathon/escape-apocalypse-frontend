import React, { Component } from 'react'
import styled from 'styled-components'

import StyledButton from './StyledButton'
import { Message, Button } from 'semantic-ui-react'
import  Timer  from 'react-compound-timer'

import Background from './Background'

export class Start extends Component {
  state = {
    running: false
  }

  render() {
    return (
      <Background>
      <Wrapper>
        <Card>
          <img src="/garbage.png" alt="Garbage" width="20%" />
          <h2>Verpackungsmüll</h2>
          {!this.state.running &&
            <Subtitle>
              Dauer der Challenge: 6 Tage
            </Subtitle>
          }
          <p>
          <strong>Schritt 1: </strong><br/>
            Sammle Müll auf einer Fläche von 1km² in deiner Umgebung auf, sortiere ihn und mache ein Foto davon. 
            Wie viel davon ist Verpackungsmüll?
          </p>
          <p>
          <strong>Schritt 2: </strong><br/>
            Betreibe Recycling (recycling, downcycling oder recycling) mit den gefundenen Sachen.
          </p>
          <p>
          <strong>Schritt 3: </strong><br/>
            Vermeide 21 Tage Plastik in Form von Einweg-Kaffee-Bechern, Plastiktüten, Plastikflaschen und Verpackung von Gemüse
          </p>
          {this.state.running === false &&
            <StyledButton text="Start" change={() => this.setState({running: true})}/>
          }
          {this.state.running &&
            <Message positive>
              So viel Zeit hast du noch: <br/>
                <Timer
                  initialTime={51800400}
                  direction="backward"
                >
                  {() => (
                    <React.Fragment>                       
                      <Timer.Hours /> Stunden <br/>
                      <Timer.Minutes /> Minuten <br/>
                      <Timer.Seconds /> Sekunden
                    </React.Fragment>  
                  )}
              </Timer><br/>
              <Button as="p" onClick={() => this.props.history.push('/submit')}>Submit Result</Button>
              </Message>
          }   
        </Card>
      </Wrapper>
      </Background>
    )
  }
}

export default Start

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  height: 100vh;
`
const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1rem;
  margin: auto;
  width: 95%;
  text-align: center;
`

const Subtitle = styled.div`
  margin-bottom: 2rem
`