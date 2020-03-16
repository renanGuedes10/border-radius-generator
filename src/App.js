import React, { useState } from 'react';
import './App.css';
import { animated } from  'react-spring'

function App() {
  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)
  const [ z, setZ ] = useState(0)
  const [ w, setW ] = useState(0)

  function handleInputValue() {
    var valX = setX(document.getElementById('top-left').value)
    var valY = setY(document.getElementById('top-right').value)
    var valZ = setZ(document.getElementById('bottom-right').value)
    var valW = setW(document.getElementById('bottom-left').value)
    return [ valX, valY, valZ, valW ]
  }
  return (
    <div className='container'>
      <div className='block'>
        <animated.div 
          className='blockForChanges'
          style={{
            borderRadius: `${x}px ${y}px ${w}px ${z}px`
          }}
        />
      </div>
      <div className='input-block'>
        <form>
          <label>Top-left</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='top-left' name='top-left' 
              min='0' 
              max='400' 
              step='1'
              onChange={() => handleInputValue()[0]}
            /><span>400</span>
            <h2>{x}</h2>
          </div>
          <label>Top-right</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='top-right' name='top-right' 
              min='0' 
              max='400' 
              step='1'
              onChange={() => handleInputValue()[1]}
            /><span>400</span>
            <h2>{y}</h2>
          </div>
          <label>Bottom-left</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='bottom-right' name='bottom-right' 
              min='0' 
              max='400' 
              step='1'
              onChange={() => handleInputValue()[2]}
            /><span>400</span>
            <h2>{z}</h2>
          </div>
          <label>Bottom-right</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='bottom-left' name='bottom-left' 
              min='0' 
              max='400' 
              step='1'
              onChange={() => handleInputValue()[3]}
            /><span>400</span>
            <h2>{w}</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
