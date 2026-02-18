import { useEffect, useRef, useState } from "react"
import Currencybox from "./components/Currencybox"
import useCurrencyinfo from "./hooks/useCurrencyinfo"


function App() {
  const [fromcurrency, setFromcurrency] = useState('USD')
  const [fromvalue, setFormvalue] = useState('')
  const [tocurrency, setTocurrency] = useState('NPR')
  const [tovalue, setTovalue] = useState('')

  const rates = useCurrencyinfo(fromcurrency)

  const currencies = [
    "AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN",
    "BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL",
    "BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLF","CLP",
    "CNH","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP",
    "DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL",
    "GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK",
    "HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP",
    "JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD",
    "KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL",
    "MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN",
    "MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB",
    "PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB",
    "RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL",
    "SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND",
    "TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","USD","UYU",
    "UZS","VES","VND","VUV","WST","XAF","XCD","XCG","XDR","XOF",
    "XPF","YER","ZAR","ZMW","ZWG","ZWL"
  ];


  const handleCurrencychange = (e,direction) =>{
    direction == 'From'?
      setFromcurrency(e.target.value):
      setTocurrency(e.target.value)
  }

  const handleSwap = () =>{
    setFromcurrency(tocurrency)
    setTocurrency(fromcurrency)
    setTovalue(fromvalue * rates[tocurrency])
  }

  const handleCurrencyexchange = () =>{
    setTovalue(fromvalue * rates[tocurrency])
  }

  const handleCurrencyupdate = (e) =>{
    setFormvalue(e.target.value)
  }

  const fromPropsarr = {
    direction : "From" ,
    currencies : currencies,
    'handleCurrencychange': handleCurrencychange,
    'handleCurrencyupdate': handleCurrencyupdate,
    currency: fromcurrency,
    value: fromvalue
  }

  const toPropsarr = {
    direction : "To" ,
    currencies : currencies,
    'handleCurrencychange': handleCurrencychange,
    'handleCurrencyupdate': handleCurrencyupdate,
    currency: tocurrency,
    value: tovalue
  }

  return (
    <div className="h-screen w-full bg-black">
      <div className="fixed flex flex-wrap top-50 inset-x-0 justify-center ">
        <div className="flex flex-col p-5 gap-3 bg-gray-600 rounded-xl">
          <div className="flex flex-col">
            <Currencybox Propsarr = {fromPropsarr}/>
            <button onClick={handleSwap} className="cursor-pointer relative z-20 ml-55 p-2 bg-blue-600 rounded-xl text-white w-22 border-2">Swap</button>
            <Currencybox Propsarr= {toPropsarr}/>
          </div>
          <div onClick={handleCurrencyexchange} className="cursor-pointer flex flex-wrap py-3 justify-center bg-blue-600 rounded-xl text-xl text-white mb-3">
            <span>Convert {fromcurrency} to {tocurrency}</span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default App

