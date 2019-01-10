const element = React.createElement('div', null, "hello world");

console.log(element);

//output:
//{$$typeof: Symbol(react.element), type: "div", key: null, ref: null, props: {…}, …}

var whereToRender = document.getElementById('app')

console.log(whereToRender);


ReactDOM.render(element  , whereToRender);