import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () =>{
    counter == 20?'':setCounter(++counter)
  }
 
  const removeValue = () =>{
    !counter?'':setCounter(--counter)
  }


  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
