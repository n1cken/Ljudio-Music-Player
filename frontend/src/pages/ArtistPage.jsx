import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import '../styles/ArtistPage.css'

function ArtistPage() {

    const urlArtist = 'https://yt-music-api.herokuapp.com/api/yt/artist/'

    const { artistId } = useParams()

    const [artist, setArtist] = useState([])
    const [songs, setSongs] = useState([])
    const [albums, setAlbums] = useState([])


    useEffect(() => {
        fetch(urlArtist + artistId)
            .then(res => res.json())
            .then(data => setArtist({
                name: data.name,
                description: data.description,
                img: data.thumbnails[0].url,
                videoId: data.products.songs.videoId,
                artistSongs: data.products.songs.content,
                artistAlbums : data.products.albums.content
            }))
            .then(data => setSongs(artist.artistSongs))
            .then(data => setAlbums(artist.artistAlbums))
    })

    return (

        <div>
            <div className="artistPageHead">
                <img className="artistPageImg" src={artist.img} alt="image" />
                <img className="artistPageBackground" src={artist.img} alt="image" />

                <div className="artistPageName"> {artist.name} </div>
            </div>
            <div className="artistPageDesc"> {artist.description} </div>

            <div className="artistPageSongHeader"> Songs </div>
            {songs && songs.map(song => (
                <div>
                    <div className="result" onClick={() => songClick(song)}>
                        <div className="resultSong"> {song.name}</div>
                    </div>
                </div>
            ))}

            <div className="artistPageAlbumHeader"> Albums </div>
            {albums && albums.map(album => (
                <div className="result" onClick={() => songClick(album)}>
                    { <img src={album.thumbnails[0].url} height="65px" width="65px" alt="" /> }
                    <div className="resultSong"> {album.name}</div>
                </div>                ))}

                </div>





    );
}

export default ArtistPage;