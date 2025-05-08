import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
  
)
function Page(){
  return (
    <Fragment>
       <Header/>
       <MainContent/>
       <Footer/>
    </Fragment>
    
  )
}

