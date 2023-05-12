import './App.scss'
import { Route, Routes } from "react-router-dom"
import NavBar from "./layouts/NavBar/NavBar"
import AirBnb from "./pages/AirBnb/AirBnb"
import Analytics from './pages/Analytics/Analytics'
import NavPaths from './constants/NavPaths'
import Paths from './constants/Paths'
import Home from './pages/Home/Home'

function App() {
  const { home, airbnb, analytics } = Paths

  return (
    <main id="App">
      <NavBar links={NavPaths} />
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={airbnb} element={<AirBnb />} />
        <Route path={`${analytics}/*`} element={<Analytics />} />
      </Routes>
    </main>
  )
}

export default App
