
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'




function PlayerApi() {

  const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'
  const { videoId } = useParams()
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
