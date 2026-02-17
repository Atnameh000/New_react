import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  const addValue = () =>{
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
  }
 
  const removeValue = () =>{
     setCounter(counter - 1)
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
