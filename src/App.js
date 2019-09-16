import React, { Component } from 'react';
import Announcement from './Announcement';

export class App extends Component {
  state = {
    message: 'Hello World!'
  }
  inputHandler = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <>
        <Announcement 
        message={this.state.message} 
        />
      <input 
      onChange={this.inputHandler}
      />
      </>
    )
  }
}

export default App;
