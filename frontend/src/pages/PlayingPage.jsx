import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'

function PlayingPage() {
    const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'

    const [song, setSong] = useState([])

    const { videoId } = useParams()

    /* When clicking on song, array resultFromSearch will be pushed with info of that song */
    useEffect(() => {
        fetch(url + videoId)
            .then(res => res.json())
            .then(data => setSong({
                videoId : data.videoId,
                type : data.type,
                name : data.name,
                artist : data.artist.name,
                album : data.album.name,
                img : data.thumbnails[0].url,
                imgW : data.thumbnails[0].width,
                imgH : data.thumbnails[0].height
                })
            )
    })

    return (
        <div className="playingPage">
            <h3>videoId: {videoId}</h3>
            <div> <img className="albumimg" src={song.img} width="200px" height="200px" alt="img"/> </div>

            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
            <h3 className="albumText">{song.album}</h3>
        </div>
    )
}

export default PlayingPage
