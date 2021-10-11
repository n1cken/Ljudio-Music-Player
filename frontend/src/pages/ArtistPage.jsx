import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function ArtistPage() {

    const urlArtist = 'https://yt-music-api.herokuapp.com/api/yt/artist/'

    const { artistId }  = useParams()

    const [artist, setArtist] = useState([])

    useEffect(() => {
        fetch(urlArtist + artistId)
            .then(res => res.json())
            .then(data => setArtist( {
                name : data.name,
                description : data.description,
                songs : data.products.songs.content,
                }
            ))

    })

    return (

        <div>
            <div className="songHeader">Artists</div>
                <div> {artist.name} </div>
                <div> {artist.description} </div>
        </div>
    );
}

export default ArtistPage;