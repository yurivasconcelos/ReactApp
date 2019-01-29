// Best approach to initialize States
// Difference between using constructor vs getInitialState in React

//The two approaches are not interchangeable.
// You should initialize state in the constructor when using ES6 classes,
// and define the getInitialState method when using React.createClass.

/*
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { initialState: something };
}
}

*** is equivalent to *** 

var MyComponent = React.createClass({
  getInitialState() {
    return { initialState: something };
  },
});
*/



//Directly on Class via class property
//class property syntax is a Stage 3 proposal so it’s not part of the official JS spec yet 

// class App extends React.Component {
//     state = {
//       name: "Yuri"
//     
//     }
//     render() {
//       // whatever you like
//     }
//   }




import React, { Component } from "react";

// export default class StateComponent extends Component {
//   constructor() {
//     super();
//     this.state = { name: "yuri" };
//   }
//   render() {
//     return <div>{this.state.name}</div>;
//   }
// }

class StateComponent extends Component {
    state = { name: "yuri" };
    
    render() {
      return <div>{this.state.name}</div>;
    }
  }

export default StateComponent;