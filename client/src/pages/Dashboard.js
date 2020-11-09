import React, { useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import BlogScroll from '../components/BlogScroll';
import SideBlurb from '../components/SideBlurb'
import PersonalModalButton from '../components/PersonalModalButton';
import { setAllUsers } from '../store/usersList';
import { setLastItem, setAllBlogs } from '../store/blogs';
import './dashboard.css';



export default function Dashboard() {
  const currentUserId = useSelector(state => state.auth.id);
  const dispatch = useDispatch();
  // const lastItem = useSelector(state => state.blogsList.lastItemId);
  // const allBlogs = useSelector(state => state.blogsList.allBlogs);
  // const allUsers = useSelector(state => state.usersList);

  useEffect(() => {
    async function users() {
      const res = await fetch('/api/users')
      const data = await res.json();
      console.log(data);
      dispatch(setAllUsers(data.users));
      dispatch(setAllBlogs(data.blogs));
      const lastItem = data.blogs[data.blogs.length - 1]
      console.log('LAST ITEM', lastItem.id);
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
        <PersonalModalButton />
      </nav>
      <div className='scroll'>
        <BlogScroll />
        <SideBlurb />
      </div>
    </>
  )
}
