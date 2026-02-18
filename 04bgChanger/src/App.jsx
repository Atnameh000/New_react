import { useState } from "react"
import { Colorgrid , Colorbutton } from "./components/index"

function App() {
  const [Bgcolor, setBgcolor] = useState('gray')
  const [Txt, setTxt] = useState('white')

  const handleOnClick = (color,txtColor="white") =>{
    return function(){
      setBgcolor(color)
      setTxt(txtColor)
    }
  }

  return (
    <div 
    style={{backgroundColor: Bgcolor, color: Txt}}
    className="h-screen w-full text-center"
    >
        <h1 className="text-9xl font-bold">{Bgcolor.toUpperCase()}🔥</h1>
        <Colorgrid handleOnClick={handleOnClick}/>
    </div>
  )
}

export default App
