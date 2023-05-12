import './App.scss'
import { Route, Routes } from "react-router-dom"
import NavBar from "./layouts/NavBar/NavBar"
import AirBnb from "./pages/AirBnb/AirBnb"
import Analytics from './pages/Analytics/Analytics'
import NavPaths from './constants/NavPaths'
import Paths from './constants/Paths'

function App() {
  const { airbnb, analytics } = Paths

  return (
    <main id="App">
      <NavBar links={NavPaths} />
      <Routes>
        <Route path={airbnb} element={<AirBnb />} />
        <Route path={`${analytics}/*`} element={<Analytics />} />
      </Routes>
    </main>
  )
}

export default App
