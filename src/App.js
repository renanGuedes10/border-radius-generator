import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './App.css';
import './responsive.css'
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
      <h1>Border Radius Modificator</h1>
      <div className='block'>
        <div className='first-column'>
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
            <code id='code-content'>
                border-radius: {x}% {y}% {w}% {z}% / {p}% {q}% {r}% {s}%;<br/>
                width: {wid}%;<br/>
                height: {hei}%;
            </code><br/>
            <CopyToClipboard text={
             `border-radius: ${x}% ${y}% ${w}% ${z}% / ${p}% ${q}% ${r}% ${s}%;
              width: ${wid}%;
              height: ${hei}%;`
            }>
              <button id='btnCopy'>Copy CSS code</button>
            </CopyToClipboard>
          </div>
        </div>

        <div className='input-block'>
          <form className='first-radius'>
            <h2 className='form-title'>First radius</h2>
            <label>Top-left</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='top-left' name='top-left' 
                min='0' 
                max='100' 
                step='1'
                value={x}
                onChange={() => handleInputValue()[0]}
              />
              <input readOnly className='read' value={x}></input>
            </div>

            <label>Top-right</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='top-right' name='top-right' 
                min='0' 
                max='100' 
                step='1'
                value={y}
                onChange={() => handleInputValue()[1]}
              />
              <input readOnly className='read' value={y}/>
            </div>
            <label>Bottom-left</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='bottom-right' name='bottom-right' 
                min='0' 
                max='100' 
                step='1'
                value={z}
                onChange={() => handleInputValue()[2]}
              />
              <input readOnly className='read' value={z}/>
            </div>
            <label>Bottom-right</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='bottom-left' name='bottom-left' 
                min='0' 
                max='100' 
                step='1'
                value={w}
                onChange={() => handleInputValue()[3]}
              /><input readOnly className='read' value={w}/>
            </div>
          </form>


          <form className='second-radius'>
            <h2 className='form-title'>Second radius</h2>
            <label>Top-left</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='top-left-s' name='top-left-s' 
                min='0' 
                max='100' 
                step='1'
                value={p}
                onChange={() => handleInputValue()[4]}
              /><input readOnly className='read' value={p}/>
            </div>
            <label>Top-right</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='top-right-s' name='top-right-s' 
                min='0' 
                max='100' 
                step='1'
                value={q}
                onChange={() => handleInputValue()[5]}
              /><input readOnly className='read' value={q}/>
            </div>
            <label>Bottom-left</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='bottom-right-s' name='bottom-right-s' 
                min='0' 
                max='100' 
                step='1'
                value={r}
                onChange={() => handleInputValue()[6]}
              /><input readOnly className='read' value={r}/>
            </div>
            <label>Bottom-right</label>
            <div className='sub'>
              <input 
                type='range'
                className='ipt' 
                id='bottom-left-s' name='bottom-left-s' 
                min='0' 
                max='100' 
                step='1'
                value={s}
                onChange={() => handleInputValue()[7]}
              /><input readOnly className='read' value={s}/>
            </div>    
          </form>

          <div className='measures'>
            <form>
              <h2 className='form-title'>Dimensions</h2>
              <label>Width</label>
              <div className='sub'>
                <input 
                  type='range'
                  className='ipt' 
                  id='div-width' name='div-width' 
                  min='0' 
                  max='100' 
                  step='1'
                  value={wid}
                  onChange={() => handleInputValue()[8]}
                /><input readOnly className='read' value={wid}/>
              </div>

              <label>Height</label>
              <div class='sub'>
                <input
                  type='range' 
                  className='ipt'
                  id='div-height' name='div-height' 
                  min='0' 
                  max='100' 
                  step='1'
                  value={hei}
                  onChange={() => handleInputValue()[9]}
                /><input readOnly className='read' value={hei}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
