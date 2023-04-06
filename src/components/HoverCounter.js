import React from 'react'
import Highercomp from './HigherComp'

const HoverCounter = ({data,update,reset}) => {
  return (
    <div className='ClickCounter'>
        <h1 className='type'>2. This is a Hover Counter using Hiigher Oder Component</h1>
        <h3 className='value'>The Counter value is : {data}</h3>
        <p>Counter value will change each time the mouse is on the button.</p>
        <br/>
        <br/>
        <button className='pureBtnIn' onMouseOver={update}>Update Count</button>
        <button className='pureBtnCl' onMouseOver={reset}>Clear Count</button>
    </div>
  )
}

export default Highercomp(HoverCounter)