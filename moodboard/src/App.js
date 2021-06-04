import Dashboard from "./Dashboard"
import NavBar from "./components/NavBar"
// Temporary Import before I implemented the entire app system
import Board from "./Board"
const App = () => {
    return (
        <div>
            <NavBar />
            {/* <Dashboard/> */}
            <Board />
        </div>
    )
}

export default App
