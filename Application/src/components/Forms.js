//https://reactjs.org/docs/forms.html

import React from "react";

export default class Forms extends React.Component {
  state = {
    simpleInputValue: "",
    myText: "",
    myTextArea: "",
    mySelect: "",
    myCheckBox: ""
  };
  render() {
    return (
      <div style={{ backgroundColor: "lightgrey", width: "300px" }}>
      <p>Forms</p>
      
        <form>
          <div id="single">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.simpleInputValue}
            />
          </div>

          <div id="multiple">
            <input
              type="text"
              name="myText"
              value={this.state.myText}
              onChange={this.handleInputChange}
            />
            <input
              type="checkbox"
              name="myCheckBox"
              value={this.state.myCheckBox}
              onChange={this.handleInputChange}
            />
            <textarea
              name="myTextArea"
              value={this.state.myTextArea}
              onChange={this.handleInputChange}
            />
            <select
              name="mySelect"
              value={this.state.mySelect}
              onChange={this.handleInputChange}
            />
          </div>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ simpleInputValue: e.target.value });
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    console.log(target, name, value, e);
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("form submitted");
  };
}

/*
in HTML, form elements such as <input>, <textarea>, and <select> 
typically maintain their own state and update it based on user input. 

In React, mutable state is typically kept in the state property of components, 
and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. 
Then the React component that renders a form also controls what happens in that form on subsequent user input. 
An input form element whose value is controlled by React in this way is called a “controlled component”.
*/

/*  Handling Multiple Inputs
When you need to handle multiple controlled input elements, 
you can add a name attribute to each element and let the handler function choose
what to do based on the value of event.target.name
*/
