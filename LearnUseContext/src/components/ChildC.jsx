import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../App'



const ChildC = () => {
  
// step4: Consumer ke andar jaake consume karlo
  
  const user = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext)

  function toggleTheme() {
    if (theme == "light")
      setTheme("dark")
    else
      setTheme('light')
  }


  return (
    <div>
      <button onClick={toggleTheme}>
        Chnage Theme
      </button>
      Data: {user.name}
    </div>
  )
}

export default ChildC
