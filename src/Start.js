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
                  <Statistic.Label>Mannheim</Statistic.Label>
                  <Statistic.Value>2070</Statistic.Value>
                </Statistic>
                <p>Wenn nicht gerade Stürme den Rhein und den Neckar über das Ufer treten lassen, gleichen die Wiesen einer Wüste.
                </p>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                Das Trinkwasser ist verschmutzt, die Stromversorgung schon lange nicht mehr stabil und zu Essen gibt es nur noch wenig. 
                Seitdem auf der Gelände der BASF nicht mehr gearbeitet werden kann, gelangen immer mehr Giftstoffe ins Grundwasser.
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                Die Luft ist so schlecht, dass man das Haus nicht mehr ohne Atemschutzmaske verlassen kann.
                Bist DU bereit Mannheim zu retten?
                <p style={{textAlign: 'center'}}>
                  <StyledButton text={"Ich bin bereit"} change={change} />
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