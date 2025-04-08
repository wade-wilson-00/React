// updater function = A function that is passed as an argument to setState() usually
//                    ex. setYear(year + 1)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater function

import React, {useState} from 'react';


function Mycomponent () {

    const [count, setCount] = useState(0);

    function increment() {
        setCount (c => c + 1);
        setCount (c => c + 1);
        setCount (c => c + 1);
    };

    function decrement () {
        setCount (c => c - 1);
        setCount (c => c - 1);
        setCount (c => c - 1);
    };

    function reset() {
        setCount(0);
    }

    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default Mycomponent