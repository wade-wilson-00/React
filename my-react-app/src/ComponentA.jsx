// useContext = React Hook that allows you to share values
//              Between multiple levels of components 
//              Without passing props through each level

//Provider Component
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//    <Child />
//    </MyContext.Provider>

import { useState, useContext, createContext } from "react";
import ComponentB from "./ComponentB.jsx";  

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Moon Knight");

    return(
        <div className="Box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>

            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
            
        </div>
    )
}

export default ComponentA;