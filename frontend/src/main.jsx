import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContxtProvider from './context/ShopContxt.jsx'



createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <ShopContxtProvider>
    <App />
  </ShopContxtProvider>
  </BrowserRouter>,
);
