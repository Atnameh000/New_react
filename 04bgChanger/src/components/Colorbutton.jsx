
function Colorbutton({btncolor,handleOnClick}){
    const txtblackcolor = ['Yellow','White','Lavender','Pink']

    return(
        <button 
            style={
                txtblackcolor.includes(btncolor)?
                {backgroundColor: btncolor, color:'black'}:
                {backgroundColor: btncolor, color:'white'}
            } 
            className="h-10 w-20 rounded-3xl object-center m-3 mr-0 border-black border-2"
            onClick={
                txtblackcolor.includes(btncolor)? 
                handleOnClick(btncolor,'black'):
                handleOnClick(btncolor)
            }
        >
            {btncolor}
        </button>
    )
}

export default Colorbutton