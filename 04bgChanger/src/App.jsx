import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-32 inset-x-0 px-2">
           <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {/* The onClick Method in React Expects a Function. We cannnot directly pass parameters inside the function, instead you need to pass it as a refrence or use arrow function syntax. */}
            <button 
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button 
            onClick={() => setColor("green")}
            className="outline-none px-3 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-3 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
            <button 
            onClick={() => setColor("brown")}
            className="outline-none px-3 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "brown"}}
            >Brown</button>
            <button 
            onClick={() => setColor("yellow")}
            className="outline-none px-3 py-1 rounded-full text-black font-semibold shadow-lg"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>
            <button 
            onClick={() => setColor("purple")}
            className="outline-none px-3 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "purple"}}
            >Purple</button>
            <button 
            onClick={() => setColor("gray")}
            className="outline-none px-3 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "gray"}}
            >Gray</button>
            <button 
            onClick={() => setColor("white")}
            className="outline-none px-3 py-1 rounded-full text-white font-semibold shadow-lg"
            style={{backgroundColor: "black"}}
            >White</button>
           </div>
        </div>

      </div>
  )
}

export default App
