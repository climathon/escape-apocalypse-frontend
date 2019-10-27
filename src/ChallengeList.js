import React, { Component } from 'react'
import styled from 'styled-components'
import ChallengeCard from './ChallengeCard'
import { challenges } from './dummyData'
import Background from './Background'
import Axios from 'axios'
import { Loader } from 'semantic-ui-react'



class ChallengeList extends Component {

  state = {
    challenges: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({loading: true})
    try{
      let response = await Axios.get('https://escape-apocalypse-21.localtunnel.me/api/challenges/')
      this.setState({
        challenges: response.data,
        loading: false
      })
      console.log(this.state)

    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    if(this.state.loading) {
      return (
        <Loader active page />
      )
    } else {
      return (
        <Background>
          <Wrapper>
            <h2>Challenges</h2>
            <ChallengeCardList>
              {this.state.challenges.map(challenge => <ChallengeCard challenge={challenge}/>)}
            </ChallengeCardList>
          </Wrapper>
        </Background>
      )   
    }
    
    
  }
  
}

export default ChallengeList

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
`
const ChallengeCardList = styled.div`
  width: 90%;
  margin: 0 auto;
`
