class Thing extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      // do stuff
    }
  }


/* 
        Another type of syntax supported by the class properties feature can make this constructor unnecessary: 
        you can set a property equal to an arrow function, 
        and the arrow function inherits the this binding of the class instance 
        so you don’t have to bind it explicitly. 
*/

//It looks like this:

  class Thing extends React.Component {
    // This is all you need to do:
    handleClick = (event) => {
      // do stuff
    }
  }