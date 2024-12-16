import '../stylesheets/custom.scss'
import TitleBar from "./components/TitleBar"
import { Container } from 'react-bootstrap'
import MainPageTopAssetBar from './components/MainPageTopAssetbar'

function MainPage() {
  return (
    <>

      <header>
        <TitleBar></TitleBar>
      </header>
      <div>
        <MainPageTopAssetBar></MainPageTopAssetBar>
      </div>


    </>
  )
}

export default MainPage
