import { useEffect, useState } from "react";

function CounterInterval(){
    const [count, setCount]=useState(5);


    useEffect(()=>{
         setInterval(()=>{
            if(count>0){
            setCount(()=>count-1)
            }
        },1000)
    
        
    }, [count])
   
    return(
        <>
        <button>Counter</button>
        <div>{count}</div>
        {/* <button onClick={()=>increment()}>Increment</button> */}
        </>
    )
}
export default CounterInterval;