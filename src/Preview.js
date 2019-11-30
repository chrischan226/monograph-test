import React from 'react';
import './Preview.css';

function Preview(props) {
  const { storage, feedback, emoji, partySize } = props;
  var emptyFeedback = feedback === '' ? true : false;
  var feedbackStyle = feedback === '' ? { 'color': 'rgba(0, 0, 0, 0.25)' } : {};
  const numLines = Math.ceil(feedback.length / 38) <= 2 ? 0 : Math.ceil(feedback.length / 38); /* 38 characters in a line */
  const responsivePreviewHeight = (numLines * 28) + 254; /* number of lines * line height of 28 */

  return (
      <section className="preview" style = {{ 'height' : responsivePreviewHeight + 99 }}>
        <div className="form-label">Preview of your review</div>
          <div className="preview-content" style = {{ 'height' : responsivePreviewHeight }}>
            <div className = 'emoji-ellipse'>
              <div className="preview-emoji">
                <span className = 'emoji-picture'>
                  {storage[emoji]}
                </span>
              </div>
            </div>
            <div className="preview-feedback" style = {feedbackStyle}>
            {emptyFeedback ? 'Let us know what we did well or could improve...' : feedback}
            </div>
            <div className="preview-party">
              <div className = "party-size">
                {partySize}
              </div>
              {' people dined here.'}
            </div>
          </div>
      </section>
  );
}

export default Preview;
