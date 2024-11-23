import './App.css'
import NavBar from "./components/MainPageNavBar"
import MainPageFilter from './components/MainPageFilter'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>

      <header>
        <NavBar></NavBar>
      </header>
      <MainPageFilter></MainPageFilter>


    </>
  )
}

export default App
