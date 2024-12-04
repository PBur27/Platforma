import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './MainPage.jsx'

createRoot(document.getElementById('root')).render(
  <MainPage></MainPage>
)
