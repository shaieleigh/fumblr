import React from 'react';

import TextIcon from './icons/TextIcon.js';
import PhotoIcon from './icons/PhotoIcon.js';
import QuoteIcon from './icons/QuoteIcon.js';
import LinkIcon from './icons/LinkIcon.js';
import ChatIcon from './icons/ChatIcon.js';
import AudioIcon from './icons/AudioIcon.js';
import VideoIcon from './icons/VideoIcon.js';

export default function BlogScroll() {
  return (
    <div className='blogScroll'>
      <div className='profPicDBScroll'>
        <img className='myProfPic' src='https://64.media.tumblr.com/5a4406dbfeeca31d14dfb9f41a25d800/72d826b0c13960da-15/s64x64u_c1/f5f285077fe67a397c3e406778b7e7deffdb8c06.pnj' />
      </div>
      <main className='dashboardMain'>
        <div className='dashboardNavBar'>
          {/* <div>
            <span className="material-icons">text_format</span>
          </div> */}
          <TextIcon />
          <PhotoIcon />
          <QuoteIcon />
          <LinkIcon />
          <ChatIcon />
          <AudioIcon />
          <VideoIcon />
          {/* <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div>
          <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div>
          <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div>
          <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div>
          <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div>
          <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div>
          <div className='dashNavButtons'><TextIcon /><p className='dashbIconFont'>Text</p></div> */}
          {/* <div><i className="fas fa-headphones-alt"></i></div> */}
        </div>
      </main>
    </div>
  )
}
