import React from 'react'
import Backward from "../assets/svgFiles/backward-solid.svg";
import play from "../assets/svgFiles/play-solid.svg";
import pause from "../assets/svgFiles/pause-solid.svg";
import forward from "../assets/svgFiles/forward-solid.svg";

import '../styles/Player.css';



class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                isPlaying : localStorage.getItem('playPause')
        }
        }

    playOrPause() {
        if (!this.state.isPlaying) {
            document.getElementById("playPause").src = play;
            this.setState({isPlaying: true})
            localStorage.setItem("playPause", this.state.isPlaying)
        } else {
            document.getElementById("playPause").src = pause;
            this.setState({isPlaying : false})
            localStorage.setItem("playPause", this.state.isPlaying)
        }
    }

    render() {
        return (
            <div>
                <div className="bottom">
                    <div></div>
                    <img src={Backward} alt="backwards" />
                    <img src={pause} alt="play" id="playPause" onClick={() => {this.playOrPause()}} />
                    <img src={forward} alt="forward" />
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Player