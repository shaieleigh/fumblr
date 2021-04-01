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
import '../assets/css/dashboard.css'



export default function Dashboard() {
  const dispatch = useDispatch();
  const currentUserId = useSelector(state => state.auth.id);
  const createModal = useSelector(state => state.createModalReducer.createModal);
  let blogsList = useSelector(state => state.blogsList.allBlogs);



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
  }, [createModal]);


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
      {createModal != 'none' ? <CreateModal /> : null }
    </>
  )
}
