import Card from "./Card";

function App() {

  // function colorHandler(color){
  //   return function(){
  //     document.body.style.backgroundColor = color
  //   }
  // }

  // function colorMaker(){
  //   const hex = '0123456789ABCEDF'
  //   let color = '#'
  //   for(let i = 0; i < 6; i++){
  //     color += hex[Math.floor(Math.random() * 10)]
  //   }
  //   console.log(color)
  //   return color
  // }
  
  
  // document
  //         .getElementById('orange')
  //         .addEventListener('click', colorHandler('orange'));

  // document
  //         .getElementById('red')
  //         .addEventListener('click', colorHandler('red'));

  return (
    <>
      <Card/>
    </>
  );
}

export default App;
