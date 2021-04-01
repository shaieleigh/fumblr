import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function Blogs() {
  let allBlogs = useSelector(state => state.blogsList.allBlogs);
  const allUsers = useSelector(state => state.usersList);
  let [ newAllBlogs, setNewAllBlogs ] = useState([]);


  useEffect(() => {
    let blogs = [];
    if(allBlogs) {
      let newBlogs = [];
      allBlogs.map(blog => newBlogs.push(blog));

      while(newBlogs.length > 0) {
        let int = getRandomInt(newBlogs.length)

        let blog = newBlogs.splice(int, 1);
        for(let i =0; i < allUsers.length; i++) {
          if(allUsers[i].id === blog[0].userId) {
            blog[0]['username'] = allUsers[i].username;
          }
        }

        blogs.push(blog[0]);
    }
    setNewAllBlogs(blogs);
    }
  }, [allBlogs]);

  // <img src="https://64.media.tumblr.com/avatar_2d50bfe6eb4c_128.pnj"></img>

  return (
    <>
      {newAllBlogs ?
        newAllBlogs.map(blog =>{
        return (
          <div className='blog' key={blog.id}>
            <p className='usernameBar'>{blog.username}</p>
            {blog.blogType === 'image' ?
              <img className='blogsImages' src={blog.blog} alt='image' />
              : <p className='blogDotBlog'>{blog.blog}</p> }
            {blog.mediaUrl? <div><iframe title={blog.id} width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/859023994&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div ><a href="https://soundcloud.com/djdiamondkuts" title="djdiamondkuts">djdiamondkuts</a> · <a href="https://soundcloud.com/djdiamondkuts/club-kuts" title="Club VVS" >Club VVS</a></div> <a href={blog.mediaUrl}>{blog.mediaUrl}</a> </div>: null}
          </div>
        )}) : null }
    </>
  )
}
