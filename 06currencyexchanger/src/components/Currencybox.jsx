
const Currencybox = ({direction,Propsarr}) =>{
    //console.log(propsarr)
    return(
        <div style={direction == 'From'?{top: 15}:{bottom: 15}} className="relative z-10 flex flex-col py-4 px-3 bg-white rounded-xl text-xl">
           <div className="flex flex-wrap gap-50 text-gray-400">
             <span>{direction}</span>
             <span className="ml-auto">Currency Type</span>
           </div>
           <div className="flex pt-5 gap-50 text-black">
              <input type="text" placeholder="0" className="outline-none" value={Propsarr.value}/>
              <select value={Propsarr.currency}  name="currencyList" onChange={(e) => Propsarr.handleCurrencychange(e,direction)}>
                {
                    Propsarr.currencies.map((currency) =>(
                    <option value={currency}>{currency}</option>
                    ))
                }
            </select>
           </div>
        </div>
    )
}

export default Currencybox

