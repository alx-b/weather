import NavDesktop from "./components/navigation/NavDesktop"
import { Routing } from "./routes/Routing"

const App = () => {
  return (
    <div className="App">
      <h1>HELLO</h1>
      <Routing>
        <NavDesktop />
      </Routing>
    </div>
  )
}

export default App
