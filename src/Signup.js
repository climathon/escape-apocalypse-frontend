import React, { Component } from 'react'

import { Form, Grid } from 'semantic-ui-react';
import StyledButton from './StyledButton';
import Background from './Background'

export class Signup extends Component {

  change = (link) => {
    this.props.history.push(link)
  }

  render() {
    return (
      <Background>

      <Grid column={1} verticalAlign={"middle"}>
        <Grid.Row width={12} centered style={{height: '100vh', width: '100%', display: 'flex'}}>
          <Form style={{margin: 'auto'}}>
            <Form.Field>
              <label style={{color: 'white'}}>First Name</label>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label style={{color: 'white'}}>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <StyledButton text={"Sign Up"} change={() => this.change('/start')}/>
          </Form>
        </Grid.Row>
      </Grid>
              
      </Background>
    )
  }
}

export default Signup
