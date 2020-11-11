import React from 'react';
// import { useSelector } from 'react-redux';

import Blogs from './Blogs';

import TextIcon from './icons/TextIcon.js';
import PhotoIcon from './icons/CameraIcon.js';
import QuoteIcon from './icons/QuoteIcon.js';
import LinkIcon from './icons/LinkIcon.js';
import ChatIcon from './icons/ChatIcon.js';
import AudioIcon from './icons/AudioIcon.js';
import VideoIcon from './icons/VideoIcon.js';



export default function BlogScroll() {


  return (
    <div className='blogScroll'>
      <div className='profPicDBScroll'>
        <img className='myProfPic' alt='myProfPic' src='https://64.media.tumblr.com/5a4406dbfeeca31d14dfb9f41a25d800/72d826b0c13960da-15/s64x64u_c1/f5f285077fe67a397c3e406778b7e7deffdb8c06.pnj' />
      </div>
      <main className='dashboardMain'>
        <div className='dashboardNavBar'>
          <TextIcon />
          <PhotoIcon />
          <QuoteIcon />
          <LinkIcon />
          <ChatIcon />
          <AudioIcon />
          <VideoIcon />
        </div>
        <div className='allBlogs'>
          <Blogs />
        </div>
      </main>
    </div>
  )
}
