'use strict';
const { useState } = React
function App() {
    //Tome en cuenta las recomendaciones dadas para implementar la soculc
    const [val, setVal] = useState();
    setInterval(() => {
        setVal(window.carPosition)
    }, 1000 / 60)
    return (
        <div>
            <h1 style={{ color: 'white' }}>Road Fighter  {val}</h1>
        </div>
    )
}


let domContainer = document.getElementById('app');
ReactDOM.render(<App />, domContainer);

