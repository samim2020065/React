import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <h1>Hello Samim</h1>
  )
  
}
// const reactElement  = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   childern: 'Click me to visit google'
// }
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)
const otherElement="chai aur react"
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    otherElement
)
  

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
    
  
)
