import React, { Component } from 'react';
import ClassBasedComponent from './ClassBased'
import StatelessComponent from './Stateless'

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
