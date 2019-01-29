//$ simbols in js files is just an explanation.

/* 
Q:      WHY should I pass props to constructor and super?
*/

/*  
A:       When you want to access this.props in constructor.
*/

class MyComponent extends React.Component {    
    constructor(props) {
        super(props)
        console.log(this.props)
    }
}

