import React, { useState } from "react";
function Pro2(){
    //multiple State
    const[age,setAge] = useState(23)
    const[sib,setSib] = useState(2)
    return(
        <>
        <h1>Today I am {age} Years of Age</h1>
        <h1>I Have {sib} Siblings</h1>
        <button onClick={()=>{setAge(age+1)}}>Get Age</button>
        <button onClick={()=>{setSib(sib+1)}}>Get Siblings</button>
        </>
    )
}
export default Pro2;