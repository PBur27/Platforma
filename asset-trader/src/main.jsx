
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../stylesheets/custom.scss'
import MainPage from './MainPage.jsx'
import TitleBar from './components/TitleBar.jsx'
import AssetSearchPage from './AssetSearchPage.jsx'
import CreateAccountPage from './CreateAccountPage.jsx'

createRoot(document.getElementById('root')).render(

  <Router>
    <header>
      <TitleBar></TitleBar>
    </header>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/search' element={<AssetSearchPage/>}/>
      <Route path='/create-account' element={<CreateAccountPage/>}/>
      
    </Routes>

  </Router>
)
