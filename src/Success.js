import React, { Component } from 'react'
import './Success.css'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'

export class Success extends Component {
  render() {
    return (
      <Background>
        <Wrapper>
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
          <Content>
            <h2>Glückwunsch!</h2>
            <p>Du hast es geschafft, die Challenge ist gelöst. Dank dir kann die Welt ein wenig aufatmen!</p>
            <Button basic onClick={() => this.props.history.push('/myChallenges')}>
              Zurück zu My Challenges
            </Button>
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
  background: rgba(250,250,250,.8);
  border-radius: 5px;
  color: green;
`

const Wrapper = styled.div`
  padding-top: 3rem; 
  text-align: center;
  color: white;
  
`

const Background = styled.div`
  background-image: linear-gradient(to right top, rgba(0,0,0,.3), rgba(0,0,0,.3)), url('/landscape_green.jpg');
  height: 100vh;
  background-size: cover;
`