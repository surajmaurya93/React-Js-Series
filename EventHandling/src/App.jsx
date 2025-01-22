
import './App.css'

// -------Event Handling In React.js-------

function App() {
  
  function handleClick(){
    alert("I Am Clicked")
  }

  function handleMouseOver(){
    alert("Para ke Upper Mouse Lekar Aaye Ho")
  }

  function handleInputChange(e){
    console.log("Value Till Now:", e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    // i am writing my custom behaviour down
    alert("Form Filled SuccessFully");
  }

  return (
    <div>
      <button onClick={() => alert("Button Click Hua Hai")}>
        Click Me
      </button>

      {/* <button onClick={alert("Immediate invoke nhi karna hai ese direct kabhi")}>
        Click Me
      </button> */}

    {/* <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange}/>
      <button type='submit'>Submit</button>
    </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border: "1px solid black"}}>
        I Am A Para
      </p>

      <button onClick={handleClick}>
        Click Me
      </button> */}
    </div>
  )
}

export default App
