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
        <div>
            <h3>videoId: {videoId}</h3>
            <div> <img src={song.img} width={song.imgW} height={song.imgH} alt="img"/> </div>

            <h3>{song.name}</h3>
            <h3>{song.artist}</h3>
            <h3>{song.album}</h3>
            <h3>{song.name}</h3>

            <p>This page will show current song that is played</p>
        </div>
    )
}

export default PlayingPage
