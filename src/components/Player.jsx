import React from 'react'
import Backward from "../assets/svgFiles/backward-solid.svg";
import play from "../assets/svgFiles/play-solid.svg";
import pause from "../assets/svgFiles/pause-solid.svg";
import forward from "../assets/svgFiles/forward-solid.svg";

import '../styles/Player.css';

let isPlaying = false;

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    playOrPause() {
        if (isPlaying == false) {
            document.getElementById("playPause").src = play;
            isPlaying = true;
        } else {
            document.getElementById("playPause").src = pause;
            isPlaying = false;
        }
    }

    render() {
        return (
            <div>
                <div className="bottom">
                    <div></div>
                    <img src={Backward} alt="backwards" />
                    <img src={pause} alt="play" id="playPause" onClick={this.playOrPause} />
                    <img src={forward} alt="forward" />
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Player