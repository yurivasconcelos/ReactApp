
var template = <h1> Hi react</h1>

var withSimpleProps = <h1 prop1="helloprop"> Hi react</h1>

const variavel = "hi complex";
var withComplexProps = <h1 prop2={variavel}></h1>


var template2 = 
<div>
    <p>test</p>
    <div id="myid"><p>Hello React</p></div>
</div>



ReactDOM.render(template2, document.getElementById('app'));