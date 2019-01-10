'use strict';

var simpleVariable = "1- Simple variable";

var conditional = true;

var array = [0, 1, 2];

var metodo = function metodo() {
        console.log('metodo acionado');
};

var template = React.createElement(
        'div',
        null,
        React.createElement(
                'h1',
                null,
                'React Operations'
        ),
        React.createElement(
                'p',
                null,
                simpleVariable
        ),
        conditional && React.createElement(
                'p',
                null,
                ' 2- Only renders if expression is ',
                conditional.toString()
        ),
        array.map(function (x) {
                return React.createElement(
                        'p',
                        null,
                        x
                );
        }),
        React.createElement(
                'button',
                { onClick: metodo },
                'Click me - aciono metodo - veja console'
        )
);

ReactDOM.render(template, document.getElementById('app'));
