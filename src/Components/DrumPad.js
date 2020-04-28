import React from 'react';

function DrumPad(props) {
    return (
        <div id='drum-pad-container'>
            <div id='Chord-1' className='drum-pad' onClick={props.handleClick}>
                Q
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" id='Q' className='clip'>
                </audio>
            </div>
            <div id='Chord-2' className='drum-pad' onClick={props.handleClick}>
                W
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" id='W' className='clip'></audio>
            </div>
            <div id='Chord-3' className='drum-pad' onClick={props.handleClick}>
                E
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" id='E' className='clip'></audio>
            </div>
            <div id='Heater-1' className='drum-pad' onClick={props.handleClick}>
                A
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id='A' className='clip'></audio>
            </div>
            <div id='Heater-2' className='drum-pad' onClick={props.handleClick}>
                S
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id='S' className='clip'></audio>
            </div>
            <div id='Heater-3' className='drum-pad' onClick={props.handleClick}>
                D
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id='D' className='clip'></audio>
            </div>
            <div id='Punchy-Kick' className='drum-pad' onClick={props.handleClick}>
                Z
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" id='Z' className='clip'></audio>
            </div>
            <div id='Kick' className='drum-pad' onClick={props.handleClick}>
                X
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id='X' className='clip'></audio>
            </div>
            <div id='Kick-Hat' className='drum-pad' onClick={props.handleClick}>
                C
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id='C' className='clip'></audio>
            </div>
        </div>
    )
}

export default DrumPad;