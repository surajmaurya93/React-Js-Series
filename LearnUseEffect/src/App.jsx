import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

// Today We Learn useEffect Hook In React.js
// 

function App() {

  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  
  // first -> side-effect function
  // second -> clean-up function
  // third -> Comma separated dependencies list

  // variation:1
  // run on every render
  // har baar render hone se just pahle execute ho jata hai 
  // useEffect(() => {
  //   alert("I will run on each render")
  // })


  // variation:2
  // that run on only first render
  // useEffect(() => {
  //   alert("i will run only on first render")
  // }, [])
  

  // variation:3
  // ye count update hone ke baad chalta hai per render hone se pahle
  // useEffect(() => {
  //   alert("i will run on everytime when is count is updates")
  // }, [count])
  

  // variation:4
  // multiple dependencies
  // useEffect(() => {
  //   alert("i will run every time when count/total is updated")
  // }, [count, total])


  // variation:5
  // is baar let's add a cleanup function
  // har re-render pe purana wala count hat rha hai aur ek naya count aa rha hai to jab purana wala count hat ta hai to hamara ye clean-up function trigger ho jata hai aur naya wala count aata hai to naya count aane se hamara ye alert chal jata hai..
  // useEffect(() => {
  //   alert("Count is Updated")
  
  //   return () => {
  //     alert("count is unmounted from UI")
  //   }
  // }, [count])
  

  // counter function
  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClickTotal(){
  //   setTotal(total+1);
  // }


  return (
    <div>

      {/* <LoggerComponent /> */}
      {/* <TimerComponent /> */}
      {/* <DataFetcher /> */}
      {/* <ResizeComponent /> */}
      <MultiEffectComponent />



      {/* <button onClick={handleClick}>
        update count
      </button>
      <br />
      Count is: {count}

      <br />
      <button onClick={handleClickTotal}>
        update total
      </button>
      <br />
      Total is: {total} */}
    </div>
  )
}

export default App
