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
  // let [ newAllBlogs, setNewAllBlogs ] = useState([]);
  // let [ ids, setIds ] = useState([]);


  // useEffect(() => {
  //   if(allBlogs) {
  //     let newBlogs = []
  //     allBlogs.map(blog => newBlogs.push(blog));
  //     let number = newBlogs.length
  //     while(number) {
  //       let int = getRandomInt(number)
  //       if(ids.includes(int)) {
  //         continue
  //       } else {
  //         ids.push(int)
  //         number--
  //       }
  //     }
  //   }
  // }, [allBlogs])

  // console.log('NEWALLBLOGS', newAllBlogs);

  return (
    <>
      {allBlogs ?
        allBlogs.map(blog =>{
        return (
          <div className='blog'>

          </div>
        )}) : null }
    </>
  )
}
