import '../stylesheets/custom.scss'
import TitleBar from "./components/TitleBar"
import { Container } from 'react-bootstrap'
import MainPageTopAssetBar from './components/MainPageTopAssetBar'
import FindMoreAssetsButton from './components/FindMoreAssetsButton'

function MainPage() {
  return (
    <>

      <MainPageTopAssetBar></MainPageTopAssetBar>
      <FindMoreAssetsButton></FindMoreAssetsButton>
    </>
  )
}

export default MainPage
