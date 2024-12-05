import '../stylesheets/custom.scss'
import TitleBar from "./components/TitleBar"
import MainPageFilter from './components/MainPageFilter'
import { Container } from 'react-bootstrap'

function MainPage() {
  return (
    <>

      <header>
        <TitleBar></TitleBar>
      </header>
      <div>
        <div className=' m-auto fs-1 w-50 bg-primary'>
          TEXTEXAMPLE
        </div>
      </div>


    </>
  )
}

export default MainPage
