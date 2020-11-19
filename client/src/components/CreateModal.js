import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCreateImageModal,
          setCreateTextModal,
          setCreateQuoteModal,
          setCreateLinkModal,
          setCreateVideoModal,
          setCreateAudioModal,
          setCreateChatModal } from '../store/createModals';

import CreateTextForm from './forms/CreateTextForm';
import CreateImageForm from './forms/CreateImageForm';
import CreateQuoteForm from './forms/CreateQuoteForm';
import CreateLinkForm from './forms/CreateLinkForm';
import CreateVideoForm from './forms/CreateVideoForm';
import CreateChatForm from './forms/CreateChatForm';
import CreateAudioForm from './forms/CreateAudioForm';

export default function CreateModal() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.auth.username)
  const createTextModal = useSelector(state => state.createModalReducer.createTextModal);
  const createImageModal = useSelector(state => state.createModalReducer.createImageModal);
  const createQuoteModal = useSelector(state => state.createModalReducer.createQuoteModal);
  const createLinkModal = useSelector(state => state.createModalReducer.createLinkModal);
  const createVideoModal = useSelector(state => state.createModalReducer.createVideoModal);
  const createChatModal = useSelector(state => state.createModalReducer.createChatModal);
  const createAudioModal = useSelector(state => state.createModalReducer.createAudioModal);

  const handleHideModal = (e) => {
    e.preventDefault();
    dispatch(setCreateTextModal(false));
    dispatch(setCreateImageModal(false));
    dispatch(setCreateQuoteModal(false));
    dispatch(setCreateLinkModal(false));
    dispatch(setCreateVideoModal(false));
    dispatch(setCreateChatModal(false));
    dispatch(setCreateAudioModal(false));
  }

  return (
    <div className='positionedModal'>
      <div className='createBlogs' onClick={handleHideModal}></div>
      <div className='createBlogsFormParent'>
        <div className='createBlogsForm'>
          <p className='createMUserName'>{username}</p>
          <div className='profPic'><img className='myProfPic' alt='myProfPic' src='https://64.media.tumblr.com/5a4406dbfeeca31d14dfb9f41a25d800/72d826b0c13960da-15/s64x64u_c1/f5f285077fe67a397c3e406778b7e7deffdb8c06.pnj' /></div>
          {createTextModal? <CreateTextForm /> : null}
          {createImageModal? <CreateImageForm /> : null}
          {createQuoteModal? <CreateQuoteForm /> : null}
          {createLinkModal? <CreateLinkForm /> : null}
          {createVideoModal? <CreateVideoForm /> : null}
          {createChatModal? <CreateChatForm /> : null}
          {createAudioModal? <CreateAudioForm /> : null}
          <div className='formNavBar'>
            <button onClick={handleHideModal} className='createFormButtons createFormButtons-Close'>Close</button>
            <button className='createFormButtons createFormButtons-Post'>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}
