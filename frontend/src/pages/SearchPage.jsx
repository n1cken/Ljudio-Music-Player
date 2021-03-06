import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { PlayerContext } from '../contexts/PlayerContext'

function SearchPage() {
    const [context, updateContext, setContext] = useContext(PlayerContext)
    const url = 'https://yt-music-api.herokuapp.com/api/yt/songs/'
    const urlArtist = 'https://yt-music-api.herokuapp.com/api/yt/artists/'

    const [artists, setArtists] = useState()
    const [songs, setSongs] = useState()

    const { search } = useParams()

    const history = useHistory()

    useEffect(() => {

        fetch(url + search)
            .then(res => res.json())
            .then(data => setSongs(data.content))

        fetch(urlArtist + search)
            .then(res => res.json())
            .then(data => setArtists(data.content))

    }, [songs])

    function songClick(song) {
        const videoId = song.videoId
        history.push('/playingpage/' + videoId)
        updateContext({
            videoId: videoId,
            queue: [...context.queue, {
                videoId: videoId,
                song: song.name,
                artist: song.artist.name,
                album: song.album.name,
                thumbnail: song.thumbnails[0].url
            }],
            song: song.name,
            artist: song.artist.name,
            album: song.album.name,
            thumbnail: song.thumbnails[0].url
        })

    }

    function artistClick(artist) {
        const browseId = artist.browseId
        history.push('/artistpage/' + browseId)




    }

    return (
        <div>
            <h2>Search Results:</h2>
            <div className="songHeader">Songs</div>

            {songs && songs.map(song => (
                <div>
                    <div className="result" onClick={() => songClick(song)}>
                        <img src={song.thumbnails[0].url} alt="" />
                        <div className="resultSong"> {song.name}
                            <div className="resultArtist"> {song.artist.name} </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="artistHeader">Artists</div>
            {artists && artists.map(artist => (
                <div>
                    <div className="result" onClick={() => artistClick(artist)}>
                        <img src={artist.thumbnails[0].url} alt="" />
                        <div className="resultArtist2"> {artist.name} </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default SearchPage
