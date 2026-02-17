import { useCallback, useEffect, useState } from "react"

function App() {
  const [pwlength, setPwlength] = useState(10)
  const [password, setPassword] = useState('')
  const [isnumberchecked, setIsnumberchecked] = useState(false)
  const [ischaracterchecked, setIscharacterchecked] = useState(false)


  // const generatePassword = useCallback(() =>{
    
  //   let generatedPassword = '';
  //   let gibrish = '';
  //   let smallletterGibrish = 'abcdefghijklmnopqrstuvwxyz'
  //   gibrish  = smallletterGibrish.toUpperCase() + smallletterGibrish
  //   if(isnumberchecked) gibrish += '0123456789'
  //   if(ischaracterchecked) gibrish += '!@#$%^&*(){}[]'

  //   console.log(gibrish)
  //   for(let i = 0; i < pwlength; i++){
  //     generatedPassword += gibrish[Math.floor(Math.random() * gibrish.length )]
  //   }
  //   setPassword(generatedPassword)
  // },[pwlength,ischaracterchecked,isnumberchecked])

  // useEffect(() =>{
  //   generatePassword()
  // },[generatePassword])

    useEffect(() =>{
      let generatedPassword = '';
      let gibrish = '';
      let smallletterGibrish = 'abcdefghijklmnopqrstuvwxyz'
      gibrish  = smallletterGibrish.toUpperCase() + smallletterGibrish
      if(isnumberchecked) gibrish += '0123456789'
      if(ischaracterchecked) gibrish += '!@#$%^&*(){}[]'
  
      for(let i = 0; i < pwlength; i++){
        generatedPassword += gibrish[Math.floor(Math.random() * gibrish.length )]
      }
      setPassword(generatedPassword)
    },[pwlength,ischaracterchecked,isnumberchecked])

  const handleCopy = () =>{

  }


  return (
    <div className="h-screen w-full bg-black">
        <div className="fixed flex flex-wrap justify-center px-2 top-12 inset-x-0">
           <div className="bg-gray-800 flex px-5 py-4 flex-col rounded-xl justify-center gap-4">
                <div className="w-125 flex flex-wrap bg-white rounded-xl" >
                  <span className="object-center text-orange-400 px-3 py-1 text-xl font-bold">{password}</span>
                  <button 
                  className="ml-auto bg-blue-600 h-10 w-20 object-center cursor-pointer text-white rounded-r-lg"
                  onClick={handleCopy}
                  >copy
                  </button>
                </div>
                <div className="flex flex-wrap gap-3 text-orange-400">
                  <label className="flex items-center gap-2">
                    <input
                      type="range"
                      min="8"
                      max="30"
                      value={pwlength}
                      onChange={(e) => setPwlength(e.target.value)}
                      className="w-full"
                    />
                    Length({pwlength})
                  </label>
                  <label className="flex items-center gap-2">
                    <input onClick={() => setIsnumberchecked(!isnumberchecked)} type="checkbox" />
                      Numbers
                  </label>
                  <label className="flex items-center gap-2">
                    <input onClick={() => setIscharacterchecked(!ischaracterchecked)} type="checkbox" />
                      Characters
                  </label>
                </div>
           </div>
        </div>
    </div>
  )
}

export default App
