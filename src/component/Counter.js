import React from "react";
import { useState } from "react";

const Counter=()=>{

const [count, setcount]=useState(0);
const [person, setPerson]=useState({firstname:'',lastname:''})
const increasefive=()=>{
for(let i=0;i<5;i++){
setcount(prevstate=>prevstate+1);
}
}
    return(
<div>
<button onClick={()=>setcount(count+1)}>Click me</button>
<p>Current value of count is {count}</p>
<button onClick={()=>increasefive()}>Click me add 5</button>
<hr/>
<input type="text" onChange={(e)=>setPerson({...person,firstname:e.target.value})} placeholder="Enter your First name"></input>
<input type="text" onChange={(e)=>setPerson({...person,lastname:e.target.value})} placeholder="Enter your last name"></input>
{
    JSON.stringify(person)}
    <p>firstname value is {person.firstname}</p>
    <p>lastname value is {person.lastname}</p>
</div>
);
  
};
export default Counter;