import React,{useState} from "react";

//Initializing State from function
function Pro4()
{
  const[cnt,setcnt]=useState(0)
  const inc=()=>{
    setcnt(cnt+1);
  }
  const dec=()=>{
    setcnt(cnt-1);
  }
  const reset=()=>{
    setcnt(0);
  }
  return(
    <>
    <h1>Count value is: {cnt}</h1>
    <button onClick={inc}>Inc</button>
    <button onClick={dec}>Dec</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}
export default Pro4