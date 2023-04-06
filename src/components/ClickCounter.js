import React from 'react'
import Highercomp from './HigherComp'

const ClickCounter = ({data,update,reset}) => {
  return (
    <div className='ClickCounter'>
        <h1 className='type'>1. This is a Click Counter using Hiigher Oder Component</h1>
        <h3 className='value'>The Counter value is : {data}</h3>
        <br/>
        <br/>
        <button className='pureBtnIn' onClick={update}>Update Count</button>
        <button className='pureBtnCl' onClick={reset}>Clear Count</button>
    </div>
  )
}

export default Highercomp(ClickCounter)