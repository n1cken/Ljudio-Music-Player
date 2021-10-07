import React, {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom'

function PlayingPage() {
    const url = 'https://yt-music-api.herokuapp.com/api/yt/song/'

    const { videoId } = useParams()

    useEffect(() => {
        fetch(url + videoId)
            .then(res => res.json())
            .then(data =>console.log(data.artist))
    })

    return (
        <div>
            <h3>videoId: {videoId}</h3>

            <p>This page will show current song that is played</p>
        </div>
    )
}

export default PlayingPage
