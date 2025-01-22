import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//------Hume Custom Function Banaya Hai Main.jsx Me------//
function MyApp(){
  return(
    <div>
      <h1>My Custom App</h1>
    </div>
  )
}/*
const ReactElement = {
  type: "a",
  props: {
      href: "https://google.com",
      target: "_blank"
  },
  children: "Click Me Visit"
}
*/

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'

const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser   //we cannot write here if else because this is evaluation expression. in this only write final outcomes
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
  ReactElement
)
