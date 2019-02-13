//class property syntax is a Stage 3 proposal so it’s not part of the official JS spec yet 

class C extends B {

    prop = "something"

}

  
  //Directly on Class via class property
  //class property syntax is a Stage 3 proposal so it’s not part of the official JS spec yet 
  
  class App extends React.Component {
      state = {
        name: "Yuri"
      }
      
      render() {
        // whatever you like
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