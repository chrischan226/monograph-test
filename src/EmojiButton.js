import React from 'react';
import './EmojiButton.css';

function EmojiButton(props) {
    const { name, value, update, emoji, selected } = props;

    return(
        <div className = 'emoji-button-container'>
            <button className = 'emoji-button' 
                onClick = {() => update({'target' : {name, value}})}
                style = {selected ? {'background' : '#ecf6ff'} : {}}>
                <span className = 'emoji-picture'>
                    {emoji}
                </span>
            </button>
        </div>
    )
}

export default EmojiButton;