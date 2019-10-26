import React, { Component } from 'react'
import { Grid, Header, Transition, Segment } from 'semantic-ui-react';
import styled from 'styled-components'

import StyledButton from './StyledButton'

const imgStyle = {
  width: '40%',
}



export class Start extends Component {

  state ={
    visible: false
  }

  change = async () => {
    await this.setState({visible: false})
    this.props.history.push('/signup')
  }

  componentDidMount() {
  this.setState({visible: true})
  }

  
  render() {
    return (
      <Transition visible={this.state.visible} animation="fade left">

      
      <Grid column={1}>
        <Grid.Row width={12} centered style={{display: 'flex', height: '100vh'}}>
          <Segment style={{margin: 'auto'}}>

          
          <Header as='h2' icon inverted>
          <img src="/garbage.png" style={imgStyle}/>
          <div style={{background: 'none', padding: '2rem', borderRadius: '5px'}}>
          <Header.Content style={{color: 'black'}}>
          Challenge #1 <br/> Upcycling
          </Header.Content>
            <Header.Subheader style={{marginTop: '2rem', color: 'black'}}>
              Did you know what upcycling is?
              <ul>
                <li>Fact Number One</li>
                <li>Fact Number Two</li>
                <li>Fact Number Three</li>
              </ul>
            </Header.Subheader>
            <StyledButton text={"Start Challenge"} change={this.change}></StyledButton>
            </div>
          </Header>
          </Segment>
        </Grid.Row>
      </Grid>
      </Transition>
    )
  }
}

export default Start
