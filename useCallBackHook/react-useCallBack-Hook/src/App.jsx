// Today We Learn About useCallBack Hook In React.Js------
// useCallback is a React Hook that lets you cache a function definition between re-renders.

// Case A:- Jab Uneccesary Re-render of child component bachane ho to useCallBack Hook Use Karna Chhahiye

import { useCallback, useState } from 'react';
import './App.css'
import ChildComponents from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(count+1);
  // }, []);

  return (

    <div>
      <ExpensiveComponent/>
    </div>

    // <div>
    //   <div>
    //     Count: {count}
    //   </div>
    //   <br />
    //   <div>
    //     <button onClick={handleClick}>
    //       Increment
    //     </button>
    //   </div>
    //   <br />
    //   <div>
    //     <ChildComponents 
    //     buttonName="Click Me" 
    //     handleClick={handleClick}
    //     />
    //   </div>
    // </div>
  )
}

export default App

// agar aap React.memo ke andar wrap kar dete hai apne components ko to isse hoga ki components re re-render tabhi hoga jab props change honge nhi to re-render nhi hoga

// if you are sending a function then react.memo won't be able to save you from re-rendering

// jab bhi ek component re-render hota hai to uske saare ke saare function by default re-create hote hai function ke re-create hone se function ka reference badal jata hai.. to jo function ka reference change ho gya to pahle wala function aur dursi baar re-render hone wala function different hota hai...