import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import '../styles/ArtistPage.css'
import { PlayerContext } from "../contexts/PlayerContext";
import share from "../assets/svgFiles/share-svgrepo-com.svg";


function ArtistPage() {

    const [context, updateContext, setContext] = useContext(PlayerContext)
    const urlArtist = 'https://yt-music-api.herokuapp.com/api/yt/artist/'

    const { artistId } = useParams()
    const history = useHistory()


    const [artist, setArtist] = useState([])
    const [songs, setSongs] = useState([])
    const [albums, setAlbums] = useState([])
    const [copyUrl, setCopyUrl] = useState(false)


    useEffect(() => {
        fetch(urlArtist + artistId)
            .then(res => res.json())
            .then(data => setArtist({
                name: data.name,
                description: data.description,
                img: data.thumbnails[0].url,
                videoId: data.products.songs.videoId,
                artistSongs: data.products.songs.content,
                artistAlbums: data.products.albums.content
            }))
            .then(data => setSongs(artist.artistSongs))
            .then(data => setAlbums(artist.artistAlbums))
    }, [songs])

    function songClick(song) {
        const videoId = song.videoId
        history.push('/playingpage/' + videoId)
        updateContext({
            videoId: videoId,
            song: song.name,
            artist: song.artist.name,
            queue: [...context.queue, {
                videoId: videoId,
                song: song.name,
                artist: song.artist.name,
                album: song.album.name,
                thumbnail: artist.img
            }],
            song: song.name,
            artist: song.artist.name,
            album: song.album.name,
            thumbnail: artist.img
        })

    }

    function shareSong() {

        try {
            const href = window.location.href;
            navigator.clipboard.writeText(href);
            setCopyUrl(true)
        } catch {
        }

        setTimeout(() => {
            setCopyUrl(false)
        }, 2000);
    }

    return (

        <div>
            <div className="artistPageHead">
                <img className="artistPageImg" src={artist.img} alt="image" />
                <img className="artistPageBackground" src={artist.img} alt="image" />

                <div className="artistPageName"> {artist.name} </div>
            </div>
            <div className="artistPageDesc"> {artist.description} </div>

            <div className="shareButton" onClick={shareSong}><img src={share} /></div>
            {copyUrl ? <div className="copyClipboard"> Coped to clipboard. </div> : null}



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
                    {<img className="artistPageResultImage" src={album.thumbnails[0].url} height="65px" width="65px" alt="" />}
                    <div className="resultSong"> {album.name}</div>
                </div>))}

        </div>





    );
}

export default ArtistPage;