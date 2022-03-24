import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { AlertProvider } from './context/AlertContext'
import ReactGA from 'react-ga4'

const TRACKING_ID = 'G-8TY21HS4SL'

ReactGA.initialize(TRACKING_ID)
ReactGA.send('pageview')

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
