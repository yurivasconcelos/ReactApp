const simpleVariable = "1- Simple variable"

const conditional = true;

const array = [0,1,2]

const metodo = () =>{
    console.log('metodo acionado');
}

var template = (
    <div>

        <h1>React Operations</h1>
        <p>{simpleVariable}</p>

        {conditional && <p> 2- Only renders if expression is {conditional.toString()}</p>}

        { array.map(x=> <p>{x}</p>) }

        <button onClick={metodo}>Click me - aciono metodo - veja console</button>

    </div>
)



ReactDOM.render(template, document.getElementById('app'));