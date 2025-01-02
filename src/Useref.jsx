import { useState, useRef } from "react";

function Useref(){
    let[count,setCount]=useState(0);
    let countRef=useRef(0);
    let increment=()=>{
        setCount(count+1);
        countRef.current++;
        console.log("State: ",count);
        console.log("Ref: ",countRef.current);
    }
    return(
        <div>
            <h1>Count:{countRef.current}</h1>
            <button onClick={increment}>++++</button>
        </div>
    )
}
export default Useref;