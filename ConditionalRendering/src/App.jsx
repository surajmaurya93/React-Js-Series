import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn';
import LogoutBtn from './components/LogoutBtn';

// Conditional Rendering In React.js

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  // -------Early Return--------
  if (!isLoggedIn) {
    return(
      <LoginBtn /> 
    )
  }

  // --------Logical Operation--------
  return(
    <div>
      <h1>Welcome Everyone To Code Help Course</h1>
      <div>
        {/* if login hai to hum logout ka buttton dikhayenge aur agar nhi hai to logout ka button nhi dikhayenge */}
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )



  // -------Ternary Operator---------
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // ------If-Else Statement-------- 
  // if (isLoggedIn) {
  //   return(
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn />
  //   )
  // }

}

export default App
