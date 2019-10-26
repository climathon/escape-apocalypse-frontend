import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'

const CarouselCard = (props) => (
  <Carousel.Item>
    <Card>
      {props.text}
    </Card>
  </Carousel.Item>
)

export default CarouselCard;

const Card = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  text-align: justify;
`