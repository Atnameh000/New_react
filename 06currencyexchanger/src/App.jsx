import { useState } from "react"
import Currencybox from "./components/Currencybox"


function App() {
  const [fromcurrency, setFromcurrency] = useState('USD')
  const [tocurrency, setTocurrency] = useState('NPR')
  const [fromvalue, setFromvalue] = useState('0')
  const [tovalue, setTovalue] = useState('0')

  const currencies= [
    "USD", // US Dollar
    "EUR", // Euro
    "GBP", // British Pound
    "INR", // Indian Rupee
    "NPR", // Nepali Rupee
    "JPY", // Japanese Yen
    "CNY", // Chinese Yuan
    "AUD", // Australian Dollar
    "CAD", // Canadian Dollar
    "CHF", // Swiss Franc
  ];

  const handleCurrencychange = (e,direction) =>{
    direction == 'From'?setFromcurrency(e.target.value):setTocurrency(e.target.value)
  }

  const handleSwap = () =>{
    setFromcurrency(tocurrency)
    setTocurrency(fromcurrency)
  }

  const fromPropsarr = {
    currencies : currencies,
    'handleCurrencychange': handleCurrencychange,
    currency: fromcurrency,
    value: fromvalue
  }

  const toPropsarr = {
    currencies : currencies,
    'handleCurrencychange': handleCurrencychange,
    currency: tocurrency,
    value: tovalue
  }

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromPropsarr.currency}`)
      .then((response) => response.json() )
      .then((jsonResponse) => console.log(jsonResponse))
      .catch(() => console.log('i am rejected'))

  return (
    <>
    </>
    // <div className="h-screen w-full bg-black">
    //   <div className="fixed flex flex-wrap top-50 inset-x-0 justify-center ">
    //     <div className="flex flex-col p-5 gap-3 bg-gray-600 rounded-xl">
    //       <div className="flex flex-col">
    //         <Currencybox direction = "From" Propsarr = {fromPropsarr}/>
    //         <button onClick={handleSwap} className="cursor-pointer relative z-20 ml-55 p-2 bg-blue-600 rounded-xl text-white w-22 border-2">Swap</button>
    //         <Currencybox direction = "To" Propsarr= {toPropsarr}/>
    //       </div>
    //       <div className="cursor-pointer flex flex-wrap py-3 justify-center bg-blue-600 rounded-xl text-xl text-white mb-3">
    //         <span>Convert {fromcurrency} to {tocurrency}</span>
    //      </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
