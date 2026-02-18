import { useEffect, useState } from "react";

function useCurrencyinfo(currency){
   const [rates, setRates] = useState({})
   useEffect(() =>{
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => response.json() )
        .then((jsonResponse) =>{
            setRates(jsonResponse.rates)
        } )
        .catch(() => console.log('Error while fetching the api data'))
   },[currency])
   return rates
}

export default useCurrencyinfo