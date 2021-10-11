import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../styles/ArtistPage.css'

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
                img : data.thumbnails[0].url,
                videoId : data.products.songs.videoId,
                }
            ))


    })


    return (

        <div>
            <div className="artistPageHead">
                <img className="artistPageImg" src={artist.img} alt="image"/>
                <img className="artistPageBackground" src={artist.img} alt="image"/>

                <div className="artistPageName"> {artist.name} </div>
            </div>
                <div className="artistPageDesc"> {artist.description} </div>

        </div>





    );
}

export default ArtistPage;