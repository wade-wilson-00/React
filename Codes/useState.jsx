// useEffect = React Hook that tells React to DO SOME CODE when
//             This Component re-renders
//             This Component mounts
//             The state of a value

// useEffect(function, [dependencies]) 

// useEffect(() => {}) // runs after every re-render
// useEffect(() => {}, []) // runs only on mount
// useEffect(() => {}, [value]) // runs on mount and when value changes

// Uses -
// Event Listeners
// Dom Manipulation
// Subscriptions (Real time updates)
// Fetching Data from an API
// Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count]); // runs when count changes

    function addCount() {
        setCount(c => c+1);
    }

    function subCount() {
        setCount(c => c-1);
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green")
    }

    return (<>
         <p style = {{color: color}}>Count: {count}</p>
         <button onClick={addCount}>Add</button>
         <button onClick={subCount}>Subtract</button>
         <button onClick={changeColor}>Change Color</button>
    </>);
}

export default MyComponent;

