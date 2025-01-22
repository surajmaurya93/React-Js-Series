import UserCard from "./components/UserCard"
import lovepic from "./assets/lovepic.jpg"
import Maharana from "./assets/maharana.jpg"
import PrithviRaj from "./assets/prithviraj.jpg"

// Cards And Props And Components


function App() {

  return (
    <div className="container">
      <UserCard name="Love Virat" desc="desc1" image={lovepic} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="desc3" image={PrithviRaj} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
