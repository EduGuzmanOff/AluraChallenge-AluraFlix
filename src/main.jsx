import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from "./GlobalStyle";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GlobalStyle />
    <App />
  </React.StrictMode>,
)
