import React from 'react';

import TextIcon from './TextIcon.js';

export default function BlogScroll() {
  return (
    <div className='blogScroll'>
      <div className='profPicDBScroll'>
        <img src='https://64.media.tumblr.com/5a4406dbfeeca31d14dfb9f41a25d800/72d826b0c13960da-15/s64x64u_c1/f5f285077fe67a397c3e406778b7e7deffdb8c06.pnj' />
      </div>
      <div>
        <div>
          <span className="material-icons">text_format</span>
        </div>
        <div>
          <TextIcon />
        </div>
        <div><i className="fas fa-headphones-alt"></i></div>
      </div>
    </div>
  )
}
