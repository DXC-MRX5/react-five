import React from 'react'
import { useState } from 'react'

const PureComp = () => {
    const [count, setCount]= useState(0)
    const Increament=()=>{
        setCount(count+1)
    }
    const clear=()=>{
        setCount(0)
    }
  return (
    <div className='pureComp'>
        <h1>This is a Counter from Pure Component</h1>
        <h3>The counter value is : {count}</h3>
        <br/>
        <br/>
        <button className='pureBtnIn' onClick={Increament}>Update Count</button>
        <button className='pureBtnCl' onClick={clear}>Clear Count</button>
    </div>
  )
}

export default PureComp