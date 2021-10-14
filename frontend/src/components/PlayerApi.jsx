
import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'
import '../styles/PlayerInformation.css'
import previous from "../assets/svgFiles/backward-solid.svg";
import play from "../assets/svgFiles/play-solid.svg";
import pause from "../assets/svgFiles/pause-solid.svg";
import next from "../assets/svgFiles/forward-solid.svg";
import share from "../assets/svgFiles/share-svgrepo-com.svg";
import SearchField from "./SearchField";


function PlayerApi() {

  const [context, updateContext] = useContext(PlayerContext)
  const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'
  const urlArtist = 'https://yt-music-api.herokuapp.com/api/yt/artist/'

  const videoId = context
  const [player, setPlayer] = useState()
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(100)
  const [copyUrl, setCopyUrl] = useState(false)
  const [playlistSongs, setPlaylistSongs] = useState([])
  const [playlistArtist, setPlaylistArtist] = useState([])

  const [playlist, setPlaylist] = useState([])

  const [playlistIndex, setPlaylistIndex] = useState(0)


  const history = useHistory()


  useEffect(() => {
    loadPlayer()
    context.videoId
    fetch(url + videoId)
    console.log(context.player)
  }, [])

  useEffect(() => {
    setProgress(0)
    setInterval(() => {
      if (!context.player) return

      let currentTime = context.player.getCurrentTime()
      let duration = context.player.getDuration()
      let playedPercent = (currentTime / duration) * 100

      setProgress(playedPercent)
    }, 100);
  }, [context.player])

  useEffect(() => {
    setTimeout(() => { playSong() }, 100);
  }, [context])

  function changeVolume (e) {
    setVolume(e.target.value)
    console.log(volume)

    player.setVolume(volume)
  }

  function changeSongPosition(e) {
    setProgress(e.target.value)

    let newPosition = context.player.getDuration() / e.target.value
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
    console.log(context)
    player.loadVideoById(context.videoId);
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

  }

  function fetchPlaylist() {

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
    }

    return
  }

  function nextSong() {

    fetchPlaylist()

    console.log(playlist)

    setPlaylistIndex(playlistIndex + 1)

    let nextSongId = playlist[playlistIndex].videoId

    console.log("nextsongId " + nextSongId)
    console.log("playlistindex " + playlistIndex)

    updateContext({
      videoId: nextSongId,
    })

    context.player.loadVideoById(videoId)

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

  function shareSong() {

    try {
      const href = window.location.href;
      navigator.clipboard.writeText(href);
      setCopyUrl(true)
    } catch {
      console.log('Failed to copy to clipboard')
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
      <div className="artistText"> {context.song}</div>
      <div className="artistText">{context.artist} </div>
      <div id="yt-player"></div>

      {copyUrl ? <div className="copyClipboard"> Copied to clipboard. </div> : null}

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
        <div></div>

        <input type="range"
               value={volume}
               onChange={changeVolume}
               className="slider"
               style={{ width: '13%', marginRight: "5vw"}}
               id="volumeRange"
        />
      </div>
    </div>
  )

}

export default PlayerApi
