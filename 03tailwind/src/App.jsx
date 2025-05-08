import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  let myObj={
    username:"samim",
    Age:21
  }
  let newArr=[1,2,3]
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-300 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chaiaurcode" btntext="choose me"/>
      <Card username="hitesh"/>
    </>
  )
}

export default App
