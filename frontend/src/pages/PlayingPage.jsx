import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PlayingPage() {

    const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'
    const [song, setSong] = useState([])
    const { videoId } = useParams()
    const [player, setPlayer] = useState()

    useEffect(() => {
        loadPlayer()
        fetch(url + videoId)
            .then(res => res.json())
            .then(data => setSong({
                videoId: data.videoId,
                type: data.type,
                name: data.name,
                artist: data.artist.name,
                album: data.album.name,
                img: data.thumbnails[0].url,
                imgW: data.thumbnails[0].width,
                imgH: data.thumbnails[0].height

            })
            )
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
        <div className="playingPage">

            <div> <img className="albumimg" src={song.img} width="200px" height="200px" alt="img" /> </div>
            <div className="playingPageSong">{song.name}</div>
            <div className="playingPageArtist">{song.artist}</div>
            <h3 className="playingPageAlbum">{song.album}</h3>


            <div id="yt-player" ></div>
            <button  className="playingPageButton" onClick={playSong}> play</button>
            <button  className="playingPageButton"onClick={pauseSong}> pause</button>
            <button  className="playingPageButton"onClick={resumeSong}>Resume</button>
        </div>
    )
}

export default PlayingPage
