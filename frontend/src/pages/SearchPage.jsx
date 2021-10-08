import React, { useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'

function SearchPage() {
    const url = 'https://yt-music-api.herokuapp.com/api/yt/songs/'
    const [artist, setArtist] = useState(null)
    const [songs, setSongs] = useState()

    const { search } = useParams()

    const history = useHistory()

    useEffect(() => {

        fetch(url + search)
            .then(res => res.json())
            .then(data => setSongs(data.content))

    })

    function songClick(song) {
        console.log(song.name)
        const videoId = song.videoId
        history.push('/playingpage/' + videoId)
    }

    return (
        <div>
            <div className="songHeader">Songs</div>
            {songs && songs.map(song => (
                <div onClick={() => songClick(song)}>{song.name}</div>
            ))}
        </div>
    )
}

export default SearchPage
