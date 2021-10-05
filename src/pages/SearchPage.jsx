import React, { useState, useEffect } from 'react'

function SearchPage() {
    //artist khalid is hardcoded we will need to implement so that our search bar defines the artist 
    const url = 'https://yt-music-api.herokuapp.com/api/yt/search/:Khalid'
    const [artist, setArtist] = useState(null)

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

    return (
        <div>
            This page will show content of searched object
        </div>
    )
}

export default SearchPage
