import React from 'react'
import { useParams } from 'react-router-dom'

function PlayingPage() {

    const { videoId } = useParams()

    console.log(videoId)


    return (
        <div>
            <h3>videoId: {videoId}</h3>
            <p>This page will show current song that is played</p>
        </div>
    )
}

export default PlayingPage
