
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'



function PlayerApi() {

  const [context, setContext] = useContext(PlayerContext)
  const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'
  const videoId = context
  const [player, setPlayer] = useState()

  useEffect(() => {
    loadPlayer()
    fetch(url + videoId)
  }, [])

  function loadPlayer() {
    let ytPlayer = new YT.Player('yt-player', {
      height: '0',
      width: '0',
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
    setPlayer(ytPlayer)
  }

  function playSong() {
    console.log(context)
    player.loadVideoById(videoId);
  }
  function pauseSong() {
    player.pauseVideo();
  }
  function resumeSong() {
    player.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return
  }

  return (
    <div>
      <div id="yt-player"></div>
      <button onClick={playSong}>Play</button>
      <button onClick={resumeSong}>resume</button>
      <button onClick={pauseSong}>pause</button>
    </div>
  )
}

export default PlayerApi
