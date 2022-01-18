import React, { useState } from "react";
function Pro1(){
    //single State
    const[age,setAge] = useState(23)
    return(
        <>
        <h1>Today I am {age} Years of Age</h1>
        <button onClick={()=>{setAge(age+1)}}>Get Age</button>
        </>
    )
}
export default Pro1;