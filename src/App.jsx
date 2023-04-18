import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState("")
  const [cal, setcal] = useState("")
  const opsd = ['/', '*', "+", "-","."]
  function restnum() {
    let btnval = []
    for (let i = 9; i > 0; i--) {
      btnval.push(
        <button onClick={() => handelnum(i.toString())} key={i} >{i}</button>
      )
    }

    return btnval
  }

  function handelnum(e) {

      if(opsd.includes(e) && count === '' || opsd.includes(e) && opsd.includes(count.slice(-1))) {
       return
       } else{

      

    setCount((count + e))
    // console.log(e.toString())
    let total = (count + e)
    if(!opsd.includes(e)){
    setcal(eval(total))
      
    }

  }
  }
  function result() {
    if(count===""){
      return
    }
    setCount(eval(count))
  }
  function delet() {

    if(count==""){
      return
    }
     let x = count.toString()
    setCount(x.slice(0, -1))

    console.log(x.slice(0,-1))
    // console.log('hi')
  }

  return (
    <div className="App">
      <div className="">
        <div className="display">
          <h3> {cal ? <span>({cal})</span> : ""} {count || "0"}</h3>

        </div>
        <div className="operator">
          <button onClick={() => handelnum('+')} >+</button>
          <button onClick={() => handelnum('/')}  >/</button>
          <button onClick={() => handelnum('*')}  >x</button>
          <button onClick={() => handelnum('-')}  >-</button>
          <button onClick={delet}  >Del</button>

        </div>
        <div className="number">
          {restnum()}
          <button onClick={() => handelnum('0')}  >0</button>
          <button onClick={() => handelnum('.')}  >.</button>
          <button onClick={result} >=</button>
        </div>
      </div>
    </div>
  )
}

export default App
