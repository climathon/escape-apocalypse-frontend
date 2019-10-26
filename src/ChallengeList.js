import React from 'react'
import styled from 'styled-components'
import ChallengeCard from './ChallengeCard'
import { challenges } from './dummyData'

const ChallengeList = () => {
  return (
    <Wrapper>
      <h2>Challenges</h2>
      <ChallengeCardList>
        {challenges.map(challenge => <ChallengeCard challenge={challenge}/>)}
      </ChallengeCardList>
    </Wrapper>
  )
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
