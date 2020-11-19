import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BlogScroll from '../components/BlogScroll';
import SideBlurb from '../components/SideBlurb';
import HomeButton from '../components/HomeButton';
import PersonalModalButton from '../components/PersonalModalButton';
import CreateModal from '../components/CreateModal';
import { setAllUsers } from '../store/usersList';
import { setLastItem, setAllBlogs } from '../store/blogs';
import './dashboard.css';



export default function Dashboard() {
  const currentUserId = useSelector(state => state.auth.id);
  const createTextModal = useSelector(state => state.createModalReducer.createTextModal);
  const createImageModal = useSelector(state => state.createModalReducer.createImageModal);
  const createQuoteModal = useSelector(state => state.createModalReducer.createQuoteModal);
  const createLinkModal = useSelector(state => state.createModalReducer.createLinkModal);
  const createVideoModal = useSelector(state => state.createModalReducer.createVideoModal);
  const createChatModal = useSelector(state => state.createModalReducer.createChatModal);
  const createAudioModal = useSelector(state => state.createModalReducer.createAudioModal);


  const dispatch = useDispatch();


  useEffect(() => {
    async function users() {
      const res = await fetch('/api/users')
      const data = await res.json();
      dispatch(setAllUsers(data.users));
      dispatch(setAllBlogs(data.blogs));
      const lastItem = data.blogs[data.blogs.length - 1]
      dispatch(setLastItem(lastItem.id));
      return data;
    }
    users();
  });


  if (!currentUserId) return <Redirect to='/login' />;
  return (
    <>
      <nav>
        <Link className='logoD logo' to={currentUserId ? '/' : '/login'}>f</Link>
        <div className='rightSideNavBar'>
          <HomeButton />
          <PersonalModalButton />
        </div>
      </nav>
      <div className='scroll'>
        <BlogScroll />
        <SideBlurb />
      </div>
      {createTextModal || createImageModal || createQuoteModal || createLinkModal || createVideoModal || createAudioModal || createChatModal
       ? <CreateModal /> : null }
    </>
  )
}
