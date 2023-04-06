import React,{useState} from "react";

const Highercomp=(WrappedComp)=>{
    function HighFunc(){
        const [count,setCount]=useState(0)
        const Increase=()=>{
            setCount(count+1)
        }
        const Clear=()=>{
            setCount(0)
        }
        return(
            <WrappedComp data={count} update={Increase} reset={Clear}/>
        )
    }
    return HighFunc
}

export default Highercomp