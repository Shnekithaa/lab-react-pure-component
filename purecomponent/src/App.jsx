import React, { Component } from 'react';

import Simplecounter from './Components/SimpleCounterComponent';
import PureCounter from './Components/PureCounter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Simplecounter />
        <PureCounter />
      </div>
    );
  }
}

