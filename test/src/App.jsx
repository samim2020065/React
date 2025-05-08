import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <Main/>
    </>
  
  )
}

// const h1 = document.createElement("h1")
// h1.textContent = "This is a imperative content"
// h1.className = "header"
// document.getElementById('root').appendChild(h1)
export default App
