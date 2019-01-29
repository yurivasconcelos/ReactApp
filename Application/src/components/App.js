import React, { Component } from 'react';
import ClassBasedComponent from './ClassBasedComponent'
import StatelessComponent from './StatelessComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassBasedComponent/>
        <StatelessComponent/>
      </div>
    );
  }
}

export default App;
