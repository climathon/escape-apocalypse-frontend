import React, { Component } from 'react'

import { Form, Checkbox, Grid, Button, Header, Transition, Segment } from 'semantic-ui-react';
import styled from 'styled-components'
import StyledButton from './StyledButton';

const imgStyle = {
  width: '80%',
}

const buttonStyle = {
  borderRadius: '500px',
  backgroundImage: `linear-gradient(to left top, rgba(233,130,35,.8), rgba(255,180,118,.8))`,
  marginTop: '2.5rem',
  boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'
}

export class Signup extends Component {

  state ={
    visible: false
  }

  change = async () => {
    await this.setState({visible: false})
    this.props.history.push("/challenge")
  }

  componentDidMount() {
  this.setState({visible: true})
  }

  

  render() {
    return (
      <Transition visible={this.state.visible} animation="fade left" duration={2000}>

      
      <Grid column={1}  verticalAlign={"middle"}>
        <Grid.Row width={12} centered style={{height: '100vh', display: 'flex'}}>
          

          
        <Form style={{margin: 'auto'}}>
    <Form.Field>
      <label style={{color: 'white'}}>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label style={{color: 'white'}}>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    {/* <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions'/>
    </Form.Field> */}
    <StyledButton text={"Sign Up"} change={this.change}/>
  </Form>
  
  
        </Grid.Row>
        <Grid.Row>
          
        </Grid.Row>
      </Grid>
      </Transition>
    )
  }
}

export default Signup
