import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import PlayerContextProvider from './contexts/PlayerContext'
import DatabaseHandlerProvider from './services/DatabaseHandler'

ReactDOM.render(
  <React.StrictMode>
    <DatabaseHandlerProvider>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </DatabaseHandlerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
