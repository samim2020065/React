import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jokes from './Jokes.jsx'
import jokesData from './jokesData.js'

function App() {
  const jokeElements = jokesData.map((joke)=>{
       return <Jokes setup ={joke.setup}
        punchline = {joke.setup}/>
  })

  return (
    <main>
       {jokeElements}
    </main>
  )
}

export default App
