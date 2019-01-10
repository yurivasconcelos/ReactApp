"use strict";

var template = React.createElement(
    "h1",
    null,
    " Hi react"
);

var withSimpleProps = React.createElement(
    "h1",
    { prop1: "helloprop" },
    " Hi react"
);

var variavel = "hi complex";
var withComplexProps = React.createElement("h1", { prop2: variavel });

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "test"
    ),
    React.createElement(
        "div",
        { id: "myid" },
        React.createElement(
            "p",
            null,
            "Hello React"
        )
    )
);

ReactDOM.render(template2, document.getElementById('app'));
