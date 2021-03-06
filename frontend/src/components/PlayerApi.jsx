
import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'
import '../styles/PlayerInformation.css'
import previous from "../assets/svgFiles/backward-solid.svg";
import play from "../assets/svgFiles/play-solid.svg";
import pause from "../assets/svgFiles/pause-solid.svg";
import next from "../assets/svgFiles/forward-solid.svg";
import share from "../assets/svgFiles/share-svgrepo-com.svg";
import mute from "../assets/svgFiles/mute.svg";
import unmute from "../assets/svgFiles/unmute.svg";
import SearchField from "./SearchField";


function PlayerApi({ playlistIndex, setPlaylistIndex }) {

  const [context, updateContext, setContext] = useContext(PlayerContext)
  const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'

  const videoId = context
  const [player, setPlayer] = useState()
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(100)
  const [copyUrl, setCopyUrl] = useState(false)
  const [playlistSongs, setPlaylistSongs] = useState([])
  const [playlistArtist, setPlaylistArtist] = useState([])
  const [userNotificationBottom, setuserNotificationBottom] = useState(false)
  const [userNotificationTop, setuserNotificationTop] = useState(false)
  const [playlist, setPlaylist] = useState([])
  const history = useHistory()


  useEffect(() => {
    loadPlayer()
    context.videoId
    fetch(url + videoId)
  }, [])

  useEffect(() => {
    setProgress(0)
    var interval = setInterval(() => {
      if (!context.player) return

      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = (currentTime / duration) * 100

      setProgress(playedPercent)
      if (currentTime / duration == 1) {
        pauseSong
        clearInterval(interval)
        nextSong()
        playPauseImage.src = pause;
      }
    }, 100);
  }, [playlistIndex, context.player])

  useEffect(() => {
    setTimeout(() => { playSong() }, 100);
  }, [context])

  function changeVolume(e) {
    setVolume(e.target.value)

    player.setVolume(volume - 2)
  }

  function changeSongPosition(e) {
    setProgress(e.target.value)

    let newPosition = (context.player.getDuration() * (e.target.value / 100))
    context.player.seekTo(newPosition, true)
  }

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
    player.loadVideoById(context.videoId);
    setPlaylistIndex(context.queue.length - 1)
    document.getElementById("playPauseButton").src = pause;
  }
  function pauseSong() {
    player.pauseVideo();
  }
  function resumeSong() {
    window.onload = playSong
    player.playVideo();
  }

  function previousSong() {
    if (playlistIndex === 1) {
      setPlaylistIndex(context.queue.length - 1)
      player.loadVideoById(context.queue[playlistIndex].videoId)
      setuserNotificationBottom(true)
      setTimeout(() => {
        setuserNotificationBottom(false)
      }, 1500);
      return
    }
    player.loadVideoById(context.queue[(playlistIndex - 1)])
    setPlaylistIndex((playlistIndex - 1))
  }

  function fetchPlaylist() {
    /*
        fetch(urlArtist + context.artistId)
          .then(res => res.json())
          .then(data => setPlaylistArtist({
            artistSongs: data.products.songs.content
          }))
          .then(data => setPlaylistSongs(playlistArtist.artistSongs))
    
    
        if (playlist.length <= 5) {
          playlistSongs.map(song => (
            playlist.push(song)
          ))
        }*/


    return
  }

  function nextSong() {
    if (playlistIndex === context.queue.length - 1) {
      setuserNotificationTop(true)
      setPlaylistIndex(0)
      setTimeout(() => {
        setuserNotificationTop(false)
      }, 2000);

      return
    }
    player.loadVideoById(context.queue[(playlistIndex + 1)])
    setPlaylistIndex((playlistIndex + 1))
  }

  function playPause() {
    let playPauseImage = document.getElementById("playPauseButton");
    if (playPauseImage.getAttribute('src') == play) {
      resumeSong();
      playPauseImage.src = pause;
    } else {
      pauseSong();
      playPauseImage.src = play;
    }
  }

  function muteUnmute() {
    let muteUnmuteImage = document.getElementById("muteUnmuteButton");
    if (muteUnmuteImage.getAttribute('src') == unmute) {
      player.mute()
      muteUnmuteImage.src = mute;
    } else {
      player.unMute()
      muteUnmuteImage.src = unmute;
    }
  }

  function shareSong() {

    try {
      const href = window.location.href;
      navigator.clipboard.writeText(href);
      setCopyUrl(true)
    } catch {
    }

    setTimeout(() => {
      setCopyUrl(false)
    }, 2000);


  }

  function onPlayerStateChange(event) {
    if (event.data != YT.PlayerState.PLAYING) return
  }


  return (

    <div className="information">
      <div className="artistText"> {context.queue[playlistIndex].song}</div>
      <div className="artistText">{context.queue[playlistIndex].artist} </div>

      <div id="yt-player"></div>

      {copyUrl ? <div className="copyClipboard"> Copied to clipboard. </div> : null}

      {userNotificationTop ? <div className="copyClipboard"> add more by playing more songs! </div> : null}
      {userNotificationBottom ? <div className="copyClipboard"> No more songs at the bottom </div> : null}

      <input type="range"
        value={progress}
        onChange={changeSongPosition}
        className="slider"
        style={{ width: '90%' }}
        id="myRange"
      />

      <div className="controllers">
        <div></div>
        <div className="controlButton"><img src={previous} id="previousButton" onClick={previousSong} /></div>
        <div className="controlButton"><img src={play} id="playPauseButton" onClick={playPause} /></div>
        <div className="controlButton"><img src={next} id="nextButton" onClick={nextSong} /></div>

        <div className="controlButton" onClick={shareSong}><img src={share} /></div>

        <div className="volumeController">
          <div className="controlButton"><img src={unmute} id="muteUnmuteButton" onClick={muteUnmute} /></div>
          <input type="range"
            value={volume}
            onChange={changeVolume}
            className="slider"
            style={{ width: '125px', position: 'relative', margin: '0 auto', top: '1.4vh', left: '0.5vw', display: 'block' }}
            id="volumeRange"
          />
        </div>
        <div></div>
      </div>
    </div>
  )

}

export default PlayerApi
