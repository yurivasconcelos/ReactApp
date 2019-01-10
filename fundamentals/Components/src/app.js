
class MyClass extends React.Component {
    render(){
        return (
            <div>
                returned from myClass.
            </div>
        )
    }
} 

//fazendo <Component/> retorna um JSX .
console.log(<MyClass/>) 
//output JSX:  //{$$typeof: Symbol(react.element), type: ƒ, key: null, ref: null, props: {…}, …}$$typeof: Symbol(react.element)key: nullprops: {}ref: nulltype: ƒ MyClass()_owner: null_store: {validated: false}_self: null_source: null__proto__: Object


ReactDOM.render(<MyClass/>, document.getElementById('app'))