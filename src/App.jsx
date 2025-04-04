import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
  
  // let counter = 5;
  const addValue = ()=>{
    if(counter === 20) return;
    
    
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      console.log("Click",counter);
    
  // counter = counter + 1;    
  }
  const removeValue = () =>{
    if(counter === 0) return;
    
    setCounter(counter-1)
    console.log("Click",counter);

  }
  return (
    <>
      <h2>Nawab</h2>
       <h3>Counter-Value : {counter}</h3>
       <button
       onClick={addValue}
       >Add-Value</button>
       <br />
       <button
       onClick={removeValue}
       >Remove-Value</button>
    </>
  )
}

export default App
