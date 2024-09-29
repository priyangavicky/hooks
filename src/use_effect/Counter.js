import React,{useState,useEffect} from "react";

const Counter=()=>{
const[count,setcount]=useState(0);
const[msg,setMsg]=useState("initials message");
useEffect(()=>{
    console.log("components mounted/updated");
    console.log(msg);
    console.log("count is increased to",count)
},[count,msg]);
return(
    <div>
        <button onClick={()=>{setcount(count+1)}}>Increase Count</button>
        <p>The count value is:{count}</p>
        <button onClick={()=>{setMsg("Msg updated onclick event")}}>Update Message</button>
    </div>
)

}
export default Counter;