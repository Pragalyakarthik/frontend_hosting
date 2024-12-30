import { useState } from "react";
//click count changes
/*function Dog()
{
    let[Count,setCount]=useState(0);
    return(
        <div>
            <button onClick={()=>setCount(Count+1) }>++</button><br/>
            <button>Count:{Count}</button> <br/>
            <button onClick={()=>setCount(Count-1) }>--</button>
        </div>
    )
}*/

//Name changes
function Dog() {
    const [name, setName] = useState("abc");

    return (
        <div>
            <input type="text" name="name" onChange={(text) => setName(text.target.value)} /><br />
            <button>name: {name}</button> <br />
        </div>
    );
}
export default Dog; 
