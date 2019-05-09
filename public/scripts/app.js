'use strict';

console.log("fuck yea!");

var template = React.createElement(
    'p',
    null,
    'Esto esta en JSX'
);
var appRoot = document.getElementById('app');

var api_key = 'AIzaSyDzKTY49xwdjw9jJCVrbltceYnZ08ahL0c';

var App = function App() {
    return React.createElement(
        'div',
        null,
        'Esto es JSX tambien !!'
    );
};

ReactDOM.render(React.createElement(App, null), appRoot);
