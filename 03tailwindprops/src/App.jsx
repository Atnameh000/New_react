
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const myObj ={
    username: 'hemanta',
    age:20,
    address: 'Palungtar'
  }

  return (
    <div className='flex flex-col relative p-10'>
      {Array.from({length: 10}).map((_,index) =>(
        <Card key = {index} userInfo = {myObj}/>
      ))}
    </div>
  )
}

export default App
