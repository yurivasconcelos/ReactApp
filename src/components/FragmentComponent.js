import React, { Component } from 'react'

export default class FragmentComponent extends Component {
  render() {
    return (
      <div>
          <React.Fragment>
              <p>Fragmented.</p>
          </React.Fragment>
      </div>
    )
  }
}



/*

Motivation
A common pattern is for a component to return a list of children. Take this example React snippet:

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
<Columns /> would need to return multiple <td> elements in order for the rendered HTML to be valid. If a parent div was used inside the render() of <Columns />, then the resulting HTML will be invalid.

class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
results in a <Table /> output of:

<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
Fragments solve this problem.

*/
