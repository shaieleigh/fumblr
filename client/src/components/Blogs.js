import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function Blogs() {
  // const dispatch = useDispatch();
  // const lastItem = useSelector(state => state.blogsList.lastItemId);
  let allBlogs = useSelector(state => state.blogsList.allBlogs);
  // const allUsers = useSelector(state => state.usersList);
  let [ newAllBlogs, setNewAllBlogs ] = useState([]);
  // let [ ids, setIds ] = useState([]);


  useEffect(() => {
    let blogs = [];
    if(allBlogs) {
      let newBlogs = [];
      allBlogs.map(blog => newBlogs.push(blog));
      console.log('NEWBLOGS', newBlogs);

      while(newBlogs.length > 0) {
        console.log('WHILEnUMBER', newBlogs.length);
        let int = getRandomInt(newBlogs.length)
        console.log('INT', int)

          // ids.push(int)
          let blog = newBlogs.splice(int, 1);
          blogs.push(blog[0]);
          console.log(blogs);
    }
    setNewAllBlogs(blogs);
    }
  }, [allBlogs]);

  console.log('NEWALLBLOGS', newAllBlogs);

  return (
    <>
      {newAllBlogs ?
        newAllBlogs.map(blog =>{
        return (
          <div className='blog' key={blog.id}>
            
          </div>
        )}) : null }
    </>
  )
}
