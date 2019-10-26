import React, { Component } from 'react'
import { Button } from 'semantic-ui-react';

const buttonStyle = {
  borderRadius: '500px',
  backgroundImage: `linear-gradient(to left top, rgba(233,130,35,.8), rgba(255,180,118,.8))`,
  marginTop: '2.5rem',
  boxShadow: '5px 5px 15px rgba(0,0,0,0.3)'
}

export class StyledButton extends Component {
  render() {
    return (
      <Button onClick={this.props.change} size="big" style={buttonStyle}>{this.props.text}</Button>
    )
  }
}

export default StyledButton
