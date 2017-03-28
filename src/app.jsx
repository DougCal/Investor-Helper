import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: Array(9).fill('-')
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('myApp'),
);
