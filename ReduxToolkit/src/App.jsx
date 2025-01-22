// -----steps-----
// create store
// wrap app component under provider
// create slice
// register reducer in store


import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

// kisi bhi action ko execute karna hota hai to usse dispatch karna hota hai aur dispatch karna hai to ek hook ki jaroorat padegi

function App() {

  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0); 
  const dispatch = useDispatch();

  function handleIncreamentClick() {
    dispatch(increment());
  }

  function handleDecreamentClick() {
    dispatch(decrement())
  }

  function handleResetClick() {
    dispatch(reset())
  }

  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={handleIncreamentClick}> + </button>

      <p>Count: {count}</p>

      <button onClick={handleDecreamentClick}> - </button>
      <br />
      <br />
      <button onClick={handleResetClick}> Reset </button>
      <br />
      <br />
      <input type='Number'
      value={amount}
      placeholder='Enter Amount'
      onChange={(e) => setAmount(e.target.value)}/>
<br />
      <br />
      <button onClick={handleIncAmountClick}> Inc By Amount </button>
    </div>
  )
}

export default App
