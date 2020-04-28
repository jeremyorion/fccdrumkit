import React, { Component } from 'react';
import Display from './Display';
import DrumPad from './DrumPad';

class DrumMachine extends Component {
    constructor(){
        super();
        this.state = {
            padClick: '',
            soundTitle: '',
            keyPress: ''
        }
        
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleClick(event) {
        const audio = event.target.lastChild;
        audio.play();

        this.setState({
            padClick: event.target.innerText,
            soundTitle: event.target.id
        });
    }

    handleKeyPress(event) {
        this.setState({
            keyPress: event.key.toUpperCase(),
            soundTitle: document.getElementById(event.key.toUpperCase()).parentNode.id
        })

        const drumpad = document.getElementById(event.key.toUpperCase());
        
        switch(event.key.toUpperCase()) {
            case "Q":
            case "W":
            case "E":
            case "A":
            case "S":
            case "D":
            case "Z":
            case "X":
            case "C":
                drumpad.play();
                break;
        }
    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress)
    }
    
    render() {
        return (
        <div id='drum-machine'>
            <Display soundTitle={this.state.soundTitle} />
            <DrumPad handleClick={this.handleClick} />
        </div>
        )
    }
}


export default DrumMachine;