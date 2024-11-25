import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MealProvider } from './pages/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <MealProvider>
  <BrowserRouter>
     <App />
   </BrowserRouter>
  </MealProvider>
  </StrictMode>,
)
