import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
//   let myOjb = {
//     username: "Suraj",
//     age: 21
//   }

// let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Suraj" btnText="Click Me"/>
      {/* if we have not insert data by mistake then we wil write the default value*/}
      <Card username="Suraj maurya" btnText="Click here"/>    
    </>
  )
}

export default App
