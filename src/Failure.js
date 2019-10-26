import React, { Component } from 'react'
import './Success.css'
import styled from 'styled-components'
import {Button, Icon} from 'semantic-ui-react'

export class Success extends Component {
  render() {
    return (
      <Background>
        <Wrapper>
          <Icon name={"cancel"} style={{color: "darkred"}} circular size={"massive"}/>
          <Content>
            <h2>Oh nein!</h2>
            <p>Du hast es leider nicht geschafft, die Challenge zu lösen. Leider geht jetzt die Welt unter!</p>
            <Button basic onClick={() => this.props.history.push('/myChallenges')}>Zurück zu My Challenges</Button>
          </Content>
        </Wrapper>
      </Background>
    )
  }
}

export default Success

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 2rem;
  background: rgba(250,250,250,.7);
  border-radius: 5px;
  color: darkred;
`

const Wrapper = styled.div`
  padding-top: 3rem; 
  text-align: center;
  color: white;
  
`

const Background = styled.div`
  background-image: linear-gradient(to right top, rgba(0,0,0,.3), rgba(0,0,0,.3)), url('/failure.jpg');
  height: 100vh;
  background-size: cover;
`