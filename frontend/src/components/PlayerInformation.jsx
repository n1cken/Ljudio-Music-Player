import React, {Component, setState} from 'react';

import '../styles/PlayerInformation.css'

class PlayerInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist : 'Rick Astley',
            song: 'Never Gonna Give You Up',
            volume : 50
        }
    }

    handleVolume = (e) => {
        this.setState(state => ({
            volume : e.target.value,
        }))
    }


    render() {
        return (
            <footer className="information">
                <div className="songText"> {this.state.song}</div>
                <div className="artistText">{this.state.artist} </div>

                <div className="slidecontainer">
                    <input type="range"
                           min="1"
                           max="100"
                           value={this.state.volume}
                           className="slider"
                           id="myRange"
                           onInput={this.handleVolume}
                    />
                </div>
            </footer>
        );
    }
}

export default PlayerInformation;