import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'

function App() {
  

  const entryElements = data.map((entry)=>{
    return (
        <Entry 
        key = {entry.id}
        {...entry}
        // img= {entry.img}
        // title = {entry.title}
        // country = {entry.country}
        // googleMapsLink = {entry.googleMapsLink}
        // dates = {entry.dates}
        // text = {entry.text}
        />
    )
  })

  return (
    <>
      <header>
        <img src="../src/assets/globe.png" alt='globe icon'/>
        <h1>my travel journal</h1>
      </header>
      {entryElements}
    </>
  )
}

export default App
