'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState;

function App() {
    //Tome en cuenta las recomendaciones dadas para implementar la soculc
    var _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        val = _useState2[0],
        setVal = _useState2[1];

    setInterval(function () {
        setVal(window.carPosition);
    }, 1000 / 60);
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { style: { color: 'white' } },
            'Road Fighter  ',
            val
        )
    );
}

var domContainer = document.getElementById('app');
ReactDOM.render(React.createElement(App, null), domContainer);