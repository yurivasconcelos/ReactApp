
/* JSX - Booleans, Null, and Undefined Are Ignored in */
/* true, false, null, undefined are valid children. They simply don’t render. These JSX  */

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





/*


These two JSX expressions are equivalent:

<MyComponent message="hello world" />
<MyComponent message={'hello world'} />

*/


/* 


Props Default to “True”
If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />

*/


/*


Spread Attributes
If you already have props as an object, and you want to pass it in JSX, you can use ... as a “spread” operator to pass the whole props object. These two components are equivalent:

function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}

*/

/*

A React component can also return an array of elements:

render() {
  // No need to wrap list items in an extra element!
  return [
    // Don't forget the keys :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
*/



