import Chai from "./chai"


//this is evaluation expression means we can write only final outcomes in return statement not all calculation like- if else,funcition etc. we can write all javaScript calculation outside the return statement.

function App() {

  const username = "Suraj Maurya" 

  return (
    // react sirf ek hi element return karta hai thats why i am using div tag.. we can insert multiple elements inside the div element.
    <div>
      <Chai />
      <h1>Chai aur react {username}</h1>
      <p>chai aur react</p>
    </div>
  )
}

export default App
