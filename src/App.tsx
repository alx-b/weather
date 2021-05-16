import NavDesktop from "./components/navigation/NavDesktop"
import { Routing } from "./routes/Routing"

const App = () => {
  return (
    <div className="App">
      <Routing>
        <div className="header-and-nav">
          <header><h1>Weather</h1></header>
          <NavDesktop />
        </div>
      </Routing>
    </div>
  )
}

export default App
