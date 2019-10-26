import React, { Component } from 'react'
import { Grid, Header, Transition } from 'semantic-ui-react';

import StyledButton from './StyledButton'

const imgStyle = {
  width: '80%',
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
        <Grid.Row width={12} centered>
          <Header as='h2' icon inverted>
          <img src="/world_healthy_2.png" style={imgStyle}/>
          <div style={{background: 'none', padding: '2rem', borderRadius: '5px'}}>
          <Header.Content>
          Escape Apocalypse
          </Header.Content>
            <Header.Subheader style={{marginTop: '2rem'}}>
              Can you save the world <br/>by suceeding in our challenges?
            </Header.Subheader>
            <StyledButton text={"Continue"} change={this.change}></StyledButton>
            </div>
          </Header>
        </Grid.Row>
      </Grid>
      </Transition>
    )
  }
}

export default Start
