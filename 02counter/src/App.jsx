import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15
  let[counter,setcounter] = useState(15);
  const addValue = ()=>{
    //console.log("clicked "+counter);
    counter = counter + 1;
    if(counter>20)
      counter = 20;
    setcounter((prevcounter)=>
      prevcounter+=1);
    setcounter((prevcounter)=>
      prevcounter+=1);
  }
  const removeValue = ()=>{
    //console.log("clicked "+counter);
    counter = counter - 1;
    if(counter<=0)
      counter = 0;
    setcounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
