import React from 'react'
import Highercomp from './HigherComp'

const KeyCounter = ({data,update,reset}) => {
  return (
    <div className='ClickCounter'>
        <h1 className='type'>3. This is a KeyPress Counter using Hiigher Oder Component</h1>
        <h3 className='value'>The Counter value is : {data}</h3>
        <p>Counter value will change each time any key is pressed(First the button has to be clicked).</p>
        <br/>
        <br/>
        <button className='pureBtnIn' onKeyDown={update}>Update Count</button>
        <button className='pureBtnCl' onKeyDown={reset}>Clear Count</button>
    </div>
  )
}

export default Highercomp(KeyCounter)