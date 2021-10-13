import React from 'react'
import PlayerApi from '../components/PlayerApi'

import '../styles/StartPage.css'

function HomePage() {
  return (
    <div className="homePage">
      This page will show latest songs played
      <PlayerApi />
    </div>
  )
}

export default HomePage
