import React from 'react';
// import { useSelector } from 'react-redux';

import Blogs from './Blogs';

import TextIcon from './icons/TextIcon.js';
import PhotoIcon from './icons/PhotoIcon.js';
import QuoteIcon from './icons/QuoteIcon.js';
import LinkIcon from './icons/LinkIcon.js';
import ChatIcon from './icons/ChatIcon.js';
import AudioIcon from './icons/AudioIcon.js';
import VideoIcon from './icons/VideoIcon.js';



// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * Math.floor(max));
// }

export default function BlogScroll() {
  // const lastItem = useSelector(state => state.blogsList.lastItemId);
  // const allBlogs = useSelector(state => state.blogsList.allBlogs);
  // const allUsers = useSelector(state => state.usersList);



  // const listAllBlogs = () => {
  //   let listBlogs = allBlogs
  //   console.log('LISTBLOGS', listBlogs)
  //   let blogOrder = [];
  //   while(listBlogs.length) {
  //     let blogId = getRandomInt(lastItem);
  //     for (let i = 0; i < listBlogs.length; i++) {
  //       let blog = listBlogs[i];
  //       if (blog.id !== blogId) {
  //         continue;
  //       } else {
  //         listBlogs = listBlogs.slice(0, i) + listBlogs.slice(i+1);
  //         blogOrder.push(i)
  //       }

  //     }
  //   }
  //   return blogOrder;
  // }

  // let listOfBlogs;
  // if(allBlogs !== undefined) {
  //   let newArray = listAllBlogs();
  //   listOfBlogs = newArray.map(blogId => <Blog />)
  // }

  // console.log('LISTOFBLOGS', listOfBlogs)

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
