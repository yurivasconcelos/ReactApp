import React, { Component } from "react";

export default class JSXComponent extends Component {
  render() {
    return (
      <div>
        
        <div style={{ backgroundColor: "lightgrey", width: "300px" }}>
          <p>JSX Inline Conditional rendering</p>
          { (true) && <p>1</p>}
        </div>

        <div style={{ backgroundColor: "lightgrey", width: "300px" }}>
          <p>JSX Conditional with Function rendering</p>
          { (this.functionIsTrue()) && <p>1</p>}
        </div>

        <div style={{ backgroundColor: "grey", width: "300px" }}>
          <p>JSX Map </p>

          {[1, 2].map(x => {
            return <p>teste {x}</p>;
          })}
        </div>


      </div>
    );
  }

  functionIsTrue(){
    return true;
  }
}
