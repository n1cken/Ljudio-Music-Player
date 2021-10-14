import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'


function PlayingPage() {

    const [context, updateContext] = useContext(PlayerContext)
    const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'
    const [song, setSong] = useState([])
    const { videoId } = useParams()

    useEffect(() => {
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


    return (
        <div className="playingPage">

            <div> <img className="albumimg" src={context.thumbnail} width="200px" height="200px" alt="img" /> </div>
            <div className="playingPageSong">{context.song}</div>
            <div className="playingPageArtist">{context.artist}</div>
            <h3 className="playingPageAlbum">{context.album}</h3>
        </div>
    )
}

export default PlayingPage
