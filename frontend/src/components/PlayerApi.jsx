
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'
import '../styles/PlayerInformation.css'
import Backward from "../assets/svgFiles/backward-solid.svg";
import play from "../assets/svgFiles/play-solid.svg";
import pause from "../assets/svgFiles/pause-solid.svg";
import forward from "../assets/svgFiles/forward-solid.svg";


function PlayerApi() {

  const [context, updateContext] = useContext(PlayerContext)
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
    updateContext({
      player: ytPlayer
    })

  }

  function playSong() {
    console.log(context)
    player.loadVideoById(context.videoId);
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
    <div className="information">
      <div className="artistText"> {context.song}</div>
      <div className="artistText">{context.artist} </div>
      <div id="yt-player"></div>
      <input type="range"
        min="1"
        max="100"
        className="slider"
        id="myRange"
      />
      <div className="controllers">
        <div></div>
        <button className="button" onClick={playSong}><img src={play} /></button>
        <button className="button" onClick={resumeSong}><img src={forward} /></button>
        <button className="button" onClick={pauseSong}><img src={pause} /></button>
        <div></div>
      </div>
    </div>
  )
}

export default PlayerApi
