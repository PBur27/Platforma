import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../stylesheets/custom.scss'
import MainPage from './MainPage.jsx'

createRoot(document.getElementById('root')).render(
  <MainPage></MainPage>
)
