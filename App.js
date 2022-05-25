'use strict';

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { style: { color: 'white' } },
            'Road Fighter'
        )
    );
}

var domContainer = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), domContainer);