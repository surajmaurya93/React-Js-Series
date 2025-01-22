// Today We Learn About useMemo Hook------

import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task")
    for (let i = 0; i < 1000000000; i++) {}
      return num*2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <br />
      <button onClick={() => setCount(count+1)}>
      Increment
      </button>
      <br />
    <input type="number" 
    placeholder='Enter Number'
     value={input}
     onChange={(e) => setInput(e.target.value)}
     />

      <br />
      <div>
        Doubles: {doubleValue}
      </div>
    </div>
  )
}

export default App


// Unnecceray expensive operation ko prevent karne ka kaam jo hota hai inse Bahcne ka jo tareeka hai wo hai useMemo Hook.
// useMemo Hook :- agar hum koi input dete hai uske corresponding koi result aayega to wo usko store kar lega baad ke liye agar dobara wesa hi input aaye to dobara calculate karne ki jaroorat na ho jo useMemo hook ne store kiya hai result wahi return karde de aur agar different input aaya to useMemo Hook dobara calculate karega phir jo uska result aayega usko store kar lega baad ke liye 