import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

function SearchPage() {
    const url = 'https://yt-music-api.herokuapp.com/api/yt/songs/'
    const [artist, setArtist] = useState(null)

    const {search} = useParams()


    useEffect( ()=> {

        fetch(url + search)
            .then(res => res.json())
            .then(data => console.log(data.content))

    })

    return (
        <div>
            This page will show content of searched object
        </div>
    )
}

export default SearchPage
