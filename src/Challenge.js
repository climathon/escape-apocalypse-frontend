import React, { Component } from 'react'
import styled from 'styled-components'

import StyledButton from './StyledButton'
import { Message, Button } from 'semantic-ui-react'
import  Timer  from 'react-compound-timer'

export class Start extends Component {
  state = {
    running: false
  }

  render() {
    return (
      <Wrapper>
        <Card>
          <img src="/garbage.png" alt="Garbage" width="30%" />
          <h2>Challenge #1</h2>
          {!this.state.running &&
            <Subtitle>
              Duration: 150min
            </Subtitle>
          }
          <p>
            Here goes the garbage challenge description.
            Here goes the garbage challenge description.
            Here goes the garbage challenge description.
            Here goes the garbage challenge description.
          </p>
          {this.state.running === false &&
            <StyledButton text="Start" change={() => this.setState({running: true})}/>
          }
          {this.state.running &&
            <Message positive>
              Time left for your challenge <br/>
                <Timer
                  initialTime={5555000}
                  direction="backward"
              >
                  {() => (
                      <React.Fragment>
                          
                          <Timer.Hours /> hours <br/>
                          <Timer.Minutes /> minutes<br/>
                          <Timer.Seconds /> seconds
                          
                      </React.Fragment>  
                  )}
              </Timer><br/>
              <Button as="p" onClick={() => this.props.history.push('/submit')}>Submit Result</Button>
              </Message>
          }   
        </Card>
      </Wrapper>
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