import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// setcounter naam rakhna jaroori nhi hai kuch bhi rakho
// useState ek Array provide karta hai jisme 2 cheez hoti hai 1st is state ka variable jisme state store hoga jese [0] store kiya hai and 2nd state ka function jiske dwara hum state ko change kar sakte hai.
  let [counter, setcounter] = useState(0)

  // let counter = 2

  const addValue = () => {
    // console.log("Clicked", counter)
    // counter = counter;
    // setcounter(counter + 1)
    if (counter == 20) {
      setcounter(counter = 20)
    }
    else{
      setcounter(counter + 1)
    }
  }

  const removeValue = () => {
    // setcounter(counter - 1)
    if (counter > 0) {
      setcounter(counter - 1)
    }
    else{
      setcounter(value = 0)
    }
  }

// UI me update hota hai to react manage karta hai.....(UI application ko react control kar hai)
// beble code ko automatically inject kar deta hai hume react ko import karne ki jaroorat nhi hoti
  
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value:</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >Remove Value:</button>
    </>
  )
}

export default App
