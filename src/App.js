import React, { useState } from 'react';
import './App.css';
import { animated } from  'react-spring'

function App() {
  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)
  const [ z, setZ ] = useState(0)
  const [ w, setW ] = useState(0)
  
  const [ q, setQ ] = useState(0)
  const [ p, setP ] = useState(0)
  const [ r, setR ] = useState(0)
  const [ s, setS ] = useState(0)

  const [ wid, setWid ] = useState(50)
  const [ hei, setHei ] = useState(50)
  
  function handleInputValue() {
    var valX = setX(document.getElementById('top-left').value)
    var valY = setY(document.getElementById('top-right').value)
    var valZ = setZ(document.getElementById('bottom-right').value)
    var valW = setW(document.getElementById('bottom-left').value)
    
    var valP = setP(document.getElementById('top-left-s').value)
    var valQ = setQ(document.getElementById('top-right-s').value)
    var valR = setR(document.getElementById('bottom-right-s').value)
    var valS = setS(document.getElementById('bottom-left-s').value)

    var valWid = setWid(document.getElementById('div-width').value)
    var valHei = setHei(document.getElementById('div-height').value)
    
    
    return [ valX, valY, valZ, valW, valP, valQ, valR, valS, valWid, valHei ]
  }
  return (
    <div className='container'>

      <div className='block'>
        <div className='bg-animated-div'>
          <animated.div 
            className='blockForChanges'
            style={{
              borderRadius: `${x}% ${y}% ${w}% ${z}% / ${p}% ${q}% ${s}% ${r}%`,
              width: `${wid}%`,
              height: `${hei}%`
            }}
          />
        </div>
        <div className='code-block'>
          <code>
            border-radius: {x}% {y}% {w}% {z}% / {p}% {q}% {r}% {s}%;<br/>
            width: {wid}%;<br/>
            height: {hei}%;
          </code>
        </div>
      </div>

      <div className='input-block'>
        <form className='first-radius'>
          <h2 className='form-title'>First radius</h2>
          <label>Top-left</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='top-left' name='top-left' 
              min='0' 
              max='100' 
              step='1'
              value={x}
              onChange={() => handleInputValue()[0]}
            /><span>100%</span>
            <h2>{x}</h2>
          </div>

          <label>Top-right</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='top-right' name='top-right' 
              min='0' 
              max='100' 
              step='1'
              value={y}
              onChange={() => handleInputValue()[1]}
            /><span>100%</span>
            <h2>{y}</h2>
          </div>
          <label>Bottom-left</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='bottom-right' name='bottom-right' 
              min='0' 
              max='100' 
              step='1'
              value={z}
              onChange={() => handleInputValue()[2]}
            /><span>100%</span>
            <h2>{z}</h2>
          </div>
          <label>Bottom-right</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='bottom-left' name='bottom-left' 
              min='0' 
              max='100' 
              step='1'
              value={w}
              onChange={() => handleInputValue()[3]}
            /><span>100%</span>
            <h2>{w}</h2>
          </div>
        </form>


        <form className='second-radius'>
          <h2 className='form-title'>Second radius</h2>
          <label>Top-left</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='top-left-s' name='top-left-s' 
              min='0' 
              max='100' 
              step='1'
              value={p}
              onChange={() => handleInputValue()[4]}
            /><span>100%</span>
            <h2>{p}</h2>
          </div>
          <label>Top-right</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='top-right-s' name='top-right-s' 
              min='0' 
              max='100' 
              step='1'
              value={q}
              onChange={() => handleInputValue()[5]}
            /><span>100%</span>
            <h2>{q}</h2>
          </div>
          <label>Bottom-left</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='bottom-right-s' name='bottom-right-s' 
              min='0' 
              max='100' 
              step='1'
              value={r}
              onChange={() => handleInputValue()[6]}
            /><span>100%</span>
            <h2>{r}</h2>
          </div>
          <label>Bottom-right</label>
          <div className='sub'>
            <span>0</span><input 
              type='range' 
              id='bottom-left-s' name='bottom-left-s' 
              min='0' 
              max='100' 
              step='1'
              value={s}
              onChange={() => handleInputValue()[7]}
            /><span>100%</span>
            <h2>{s}</h2>
          </div>    
        </form>

        <div className='measures'>
          <form>
            <h2 className='form-title'>Dimensions</h2>
            <label>Width</label>
            <input 
              type='range' 
              id='div-width' name='div-width' 
              min='0' 
              max='100' 
              step='1'
              value={wid}
              onChange={() => handleInputValue()[8]}
            />
            <label>Height</label>
            <input
              type='range' 
              id='div-height' name='div-height' 
              min='0' 
              max='100' 
              step='1'
              value={hei}
              onChange={() => handleInputValue()[9]}
            />
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
