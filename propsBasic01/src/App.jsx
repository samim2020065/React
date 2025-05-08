import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card 
      img='../src/assets/mr.whiskerson.jpg'
      name='Mr. whiskerson'
      <i class="fa-solid fa-phone"></i>/>
    </>
  )
}

export default App
