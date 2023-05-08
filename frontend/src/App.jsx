import './App.scss'
import { Route, Routes } from "react-router-dom"
import NavBar from "./layouts/NavBar/NavBar"
import AirBnb from "./pages/AirBnb/AirBnb"

function App() {
  return (
    <main id="App">
      <NavBar />
      <Routes>
        <Route path="/airbnb" element={<AirBnb />} />
      </Routes>
    </main>
  )
}

export default App
