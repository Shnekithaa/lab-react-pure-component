import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         toggle: false,
      }
    }
    handleIncrement = () => {
        if (this.state.toggle) {
            this.setState({count: this.state.count + 1})
        }else{
            this.setState({count: this.state.count})
        }
    }
    handleToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }
    
  render() {
    console.log("This is simple component")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={(this.handleIncrement)}>Click</button>
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }
}
