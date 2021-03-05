import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateModal } from '../store/createModals';
// import Cookies from 'js-cookie';
import CreateTextForm from './forms/CreateTextForm';
import CreateImageForm from './forms/CreateImageForm';
import CreateQuoteForm from './forms/CreateQuoteForm';
import CreateLinkForm from './forms/CreateLinkForm';
import CreateVideoForm from './forms/CreateVideoForm';
import CreateChatForm from './forms/CreateChatForm';
import CreateAudioForm from './forms/CreateAudioForm';
import { createBlogGeneral } from '../store/createBlogs';

export default function CreateModal() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username);
  const blog = useSelector(state => state.createBlog);
  const createModal = useSelector(state => state.createModalReducer.createModal);
  const userId = useSelector(state => state.auth.id);


  useEffect(() => {
    if(createModal !== 'none'){
        document.body.style.overflow = 'hidden';
      }

  }, [username, createModal])

  const handleHideModal = (e) => {
    e.preventDefault();
    dispatch(setCreateModal('none'));

    document.body.style.overflow = 'scroll';
  }

  const handlePost = () => {
    if(userId){
      console.log('blog', blog);
      createBlogGeneral({blog, userId})
    }
    }
  console.log('create Modal', createModal);
  return (
    <div className='positionedModal'>
      <div className='createBlogs' onClick={handleHideModal}></div>
      <div className='createBlogsFormParent'>
        <div className='createBlogsForm'>
          <p className='createMUserName'>{username}</p>
          <div className='profPic'><img className='myProfPic' alt='myProfPic' src='https://64.media.tumblr.com/5a4406dbfeeca31d14dfb9f41a25d800/72d826b0c13960da-15/s64x64u_c1/f5f285077fe67a397c3e406778b7e7deffdb8c06.pnj' /></div>
          {createModal === "text"? <CreateTextForm /> : null}
          {createModal === "image"? <CreateImageForm /> : null}
          {createModal === "quote"? <CreateQuoteForm /> : null}
          {createModal === 'link'? <CreateLinkForm /> : null}
          {createModal === 'video'? <CreateVideoForm /> : null}
          {createModal === 'chat'? <CreateChatForm /> : null}
          {createModal ==='audio'? <CreateAudioForm /> : null}
          <div className='formNavBar'>
            <button onClick={handleHideModal} className='createFormButtons createFormButtons-Close'>Close</button>
            <button className='createFormButtons createFormButtons-Post' onClick={handlePost}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}
