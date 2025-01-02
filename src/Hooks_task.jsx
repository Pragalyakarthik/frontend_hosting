import { useState, useEffect } from "react";

function Hooks_task() {
  const [name, setName] = useState("abc"); 
useEffect(()=>{
    console.log(name)
},[name])
  return (
    <div>
      <label htmlFor="name">NAME:{name}</label>
      <input type="text" id="name" placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default Hooks_task;
