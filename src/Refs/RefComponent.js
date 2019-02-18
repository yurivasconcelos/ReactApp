import React, { Component } from 'react'

export default class RefComponent extends Component {

  myRef = React.createRef();

  render() {
    return (
      <div>
        <p ref={this.myRef}>Refs</p>
        <button onClick={this.handleClick}>log ref</button>
      </div>
    )
  }

  handleClick = () => {
    console.log(this.myRef.current);
  }
}


//You may not use the ref attribute on FUNCTION COMPONENTS because they don’t have instances:

//NOT A REAL CLASS
function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {

  textInput = React.createRef();

  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}

/* Adding a Ref to a Class Component
If we wanted to wrap the CustomTextInput above to simulate it being clicked immediately after mounting, 
we could use a ref to get access to the custom input and call its focusTextInput method manually: */

class AutoFocusTextInput extends React.Component {

  textInput = React.createRef();

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
 //Note that this only works if CustomTextInput is declared as a class:

class CustomTextInput extends React.Component {
  // ...
}