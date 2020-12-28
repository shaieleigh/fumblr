import React from 'react';
import { useDispatch } from 'react-redux';

import { createTextBlog, createTextTitleBlog } from '../../store/createBlogs';


export default function CreateTextForm() {
  const dispatch = useDispatch();

  const formChangeTitle = (e) => {
    e.preventDefault();
    dispatch(createTextTitleBlog({title: e.target.value}));
  }

  const formChangeText = (e) => {
    e.preventDefault();
    let html = e.target.innerHTML;
    dispatch(createTextBlog({text: html}));

  }

  return (
    <div>
      <form>
      <input className='titleCreateText' type='text' placeholder='Title' onChange={formChangeTitle}/>
      <div className='textCreateText' contentEditable='true' onInput={formChangeText}></div>
      </form>
    </div>
  )
}
