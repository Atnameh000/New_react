import Colorbutton from "./Colorbutton"

function Colorgrid({handleOnClick}){

   const colors = ['Red','Green','Blue','Gray','Yellow','Pink','Purple','Black','White','Orange','Lavender']

   return(
    <div className="bg-amber-50 w-256 h-15 rounded-3xl mt-145 flex flex-row">
        {
            colors.map((color,index) =>(
               <Colorbutton key={index}  btncolor={color} handleOnClick={handleOnClick}/>
            ))
        }
    </div>
   )
}

export default Colorgrid