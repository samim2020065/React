import React from 'react'
export default function Jokes(props){

  const [isShown,setIsShown] = React.useState(false)
  
  function toggleShown(){
    setIsShown(prevShown => !prevShown)
  }
    return(
        <div>
          {props.setup && <p className="setup">Setup: {props.setup}</p> }
          {isShown ? <p>Punchline: {props.punchline}</p> : null}
          <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} punchline</button>
          <hr/>
        </div>
    )
}