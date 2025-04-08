// React hooks = Special function that allows functional components to use
//               React features without class components 
//               (useState, useEffect, useContext, useReducer, useCallback, and more...)

// useState() = A React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the virtual DOM


import React, {useState} from 'react';

function MyComponent() {
    
    const [name, setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const [isEmployed, setEmployement] = useState(false);

    const updateName = () => {
       setName("PeterParker");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setEmployement(!isEmployed);
    }

    return(<div>
               <p>Name: {name}</p>
               <button onClick={updateName}>Set Name</button>

               <p>Age: {age}</p>
               <button onClick={incrementAge}>Increment Age</button>

               <p>is employed: {isEmployed ? "Yes" : "No"}</p>
               <button onClick={toggleEmployedStatus}>Update Status</button>
           </div>
    )
}

export default MyComponent