import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Statistic } from 'semantic-ui-react';

import StyledButton from './StyledButton';

const Start = (props) => {
  const change = () => {
    props.history.push('/challenges')
  }
    return (
      <>
        <Top />
        <Bottom>
          <Carousel as="div" style={{width: '100%', height: '100%', maxHeight: '100%'}} controls={false} interval={80000}>
            <Carousel.Item as="div" style={{height: '100%'}}>
              <Card>
                <Statistic style={{width: '100%'}}>
                  <Statistic.Value>80</Statistic.Value>
                  <Statistic.Label>Mio. Tonnen Plastikmüll</Statistic.Label>
                </Statistic>
                <p>befinden sich zurzeit in den Weltmeeren. Jährlich gelangen rund 10 Millionen Tonnen Plastikmüll zusätzlich ins Meer.</p>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
              <Statistic style={{width: '100%'}}>
                  <Statistic.Value>38</Statistic.Value>
                  <Statistic.Label>Kilogramm</Statistic.Label>
                </Statistic>
                <p>
                  So hoch lag 2016 der deutsche Pro-Kopf-Anteil von Plastikverpackungsabfall.
                </p>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
              <Statistic style={{width: '100%'}}>
                  <Statistic.Value>450</Statistic.Value>
                  <Statistic.Label>Jahre</Statistic.Label>
                </Statistic>
                <p>
                  So lange braucht eine Plastikflasche, um sich zu zersetzen.
                </p>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                Du siehst, Plastik ist nicht nur schlecht für die CO2-Bilanz, sondern auch extrem schädlich für unsere Erde und ihre Lebewesen. 
                Willst du mithelfen, etwas dagegen zu unternehmen?
                <p style={{textAlign: 'center'}}>
                  <StyledButton text={"Ja, ich mach was!"} change={change} />
                </p>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Bottom>
      </>
    )
}

export default Start

const Top = styled.div`
  height: 62%;
  max-height: 62%;
`

const Bottom = styled.div`
  height: 38%;
  max-height: 38%;
  display: flex;
  padding: 1rem;
`

const Card = styled.div`
  background: white;
  height: 100%;
  max-height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  text-align: justify;
`