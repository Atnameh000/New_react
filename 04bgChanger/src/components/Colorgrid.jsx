import { Colorbutton } from './index'

function Colorgrid({handleOnClick}){

   const colors = ['Olive','Red','Green','Blue','Gray','Yellow','Pink','Purple','Black','White','Orange','Lavender']

   return(
    <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="bg-amber-50  flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl">
        {
            colors.map((color,index) =>(
               <Colorbutton key={index}  btncolor={color} handleOnClick={handleOnClick}/>
            ))
        }
        </div>
    </div>
   )
}

export default Colorgrid