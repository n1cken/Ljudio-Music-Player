import React from 'react'
import Backward from "../assets/svgFiles/backward-solid.svg";
import play from "../assets/svgFiles/play-solid.svg";
import forward from "../assets/svgFiles/forward-solid.svg";

import '../styles/Player.css';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="bottom">1
                    <div></div>
                    <img src={Backward} alt="backwards"/>
                    <img src={play} alt="play"/>
                    <img src={forward} alt="forward"/>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Player