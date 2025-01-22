// -----Today we learn about useRef Hook in react.js-----

import { useEffect, useState, useRef } from 'react'
import './App.css'


function App() {

  {/*--------This Is Comment--------

  const [count, setCount] = useState(0);
  // let val = 0;
  let value = useRef(0);


  // create useRef Hook
  let btnRef = useRef();

  function handleIncrement() {
    // val = val + 1;
    value.current = value.current + 1;
    console.log("value of val:", value.current);
    setCount(count + 1);
  }

  // its run on every render
  useEffect(() => {
    console.log("Main Firse Render Ho Gya Hoo")
  })

  function changeColor(){
    btnRef.current.style.backgroundColor = "red"        // Change The Refrence Property
  }

  */}

  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 500);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
  }

  return (
    <div>
      <h1>StopWatch: {time} seconds </h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br />
      <br />
      <button onClick={stopTimer}>
        Stop
      </button>
      <br />
      <br />
      <button onClick={resetTimer}>
        Reset
      </button>

      {/* <button 
      ref={btnRef}        // Link useRef hook
      onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <br />
      <button onClick={changeColor}>
        Change Color Of 1st Button
      </button>
      <br />
      <br />
      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App



// normal variable agar re-render ho jaye to value dobara se intialize hoti hai
// lekin jo useRef() hook ke dwara create kiye gye variables hote hai wo apni value ko persist karte hai accross re-renders..

// jab bhi aapka state variable change hota hai to state variable change hone per re-render karwata hai UI Ko..
// jabki apka useRef() ka jo variable hai wo aapka change hota hai to uske change hone per koi re-render nhi hota.
// ref is object
// useRef apni value ko pursist hoti hai


// ------ B -> Use Case ------
// useRef Ko Isliye Bnaya Gya Tha Taaki Hum Apne DOM Me Se Kisi Bhi Element Ko Directly Change Kar Paaye
// 1. Create Ref
// 2. Link The Ref In The Particular Element
// 3. Ref.current ko use karke uski koi bhi property change kar skate hai like bg-color text etc....