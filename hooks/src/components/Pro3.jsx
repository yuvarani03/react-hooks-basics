//object State

import React, {useState} from "react";
function Pro3(){
    const[state, setState]=useState({age:23,sib:2})
    const handleClick= val=>
    setState({
        ...state,
        [val]:state[val]+1
    })
    const{age,sib} =state
    return(
        <>
        <h1>Today I am {age} Years of Age</h1>
        <h1>I Have {sib} Siblings</h1>
        <button onClick={handleClick.bind(null,'age')}>Get Age</button>
        <button onClick={handleClick.bind(null,'sib')}>Get Siblings</button>
        </>
    )
}
export default Pro3
