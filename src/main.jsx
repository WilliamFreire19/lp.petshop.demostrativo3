import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// No seu main.jsx ou App.jsx
import 'aos/dist/aos.css' // Esta é a linha que pode estar dando erro

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)