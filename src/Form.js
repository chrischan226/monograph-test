import React from 'react';
import EmojiButton from './EmojiButton';
import './Form.css';

function Form(props) {
  const { party, feedback, update, emoji } = props;

  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea className="form-textarea"
        name="feedback"
        rows="4"
        value = {feedback}
        onChange={(e) => update(e)}
        placeholder="Let us know what we did well or could improve..."
      />
      <label className="form-label">How many in your party?</label>
      <input className="form-input"
        type="number"
        name="party"
        min="1"
        value = {party}
        onChange={(e) => update(e)}
        placeholder="2"
      />
      <label className="form-label">How was your meal?</label>
      <div className = 'emoji-buttons'>
        {props.storage.map((icon, index) => 
          <EmojiButton
            key = {index}
            value = {index}
            name = 'emoji'
            selected = {index === emoji ? true : false}
            update = {update}
            emoji = {icon}
          />
        )}
      </div>
    </div>
  );
}

export default Form;
