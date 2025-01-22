// today we learn about useContext Hook and Prop-Drilling in React.js
// prop-drilling:- hume faltu me kuch components ke dwara data ko transefer karna pad rha hai hume un components ki jaroorat bhi nhi hai phir bhi to isi problem ko door karne ke liye useContext hook hai isme hota hai ki jis component ko data send karna hai wo context-provide banega aur jis component ko data receive karna hai wo context-consumer banega. iskpo 4 part me divide kiya gya hai.
// step1: create Context
// step2: wrap all the child inside a provider
// step3: pass value
// step4: Consumer ke andar jaake consume karlo


import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// step1: create Context
const UserContext = createContext();

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "Suraj" });
  const [theme, setTheme] = useState("light")

  // step2: wrap all the child inside a provider
  // step3: pass value

  return (
    <>

      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div id="container" style={{ backgroundColor: theme === "light" ? "beige" : "black" }}>
            <ChildA />
          </div>

        </ThemeContext.Provider>
      </UserContext.Provider>


      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
    </>
  )
}

export default App
export { UserContext }
export { ThemeContext }
