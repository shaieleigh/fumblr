const SET_CREATE_TEXT_MODAL = 'SET_CREATE_TEXT_MODAL';
const SET_CREATE_QUOTE_MODAL = 'SET_CREATE_QUOTE_MODAL';
const SET_CREATE_IMAGE_MODAL = 'SET_CREATE_IMAGE_MODAL';
const SET_CREATE_VIDEO_MODAL = 'SET_CREATE_VIDEO_MODAL';
const SET_CREATE_LINK_MODAL = 'SET_CREATE_LINK_MODAL';
const SET_CREATE_CHAT_MODAL = 'SET_CREATE_CHAT_MODAL';
const SET_CREATE_AUDIO_MODAL = 'SET_CREATE_AUDIO_MODAL';

const inititalState = {
  createTextModal: false,
  createQuoteModal: false,
  createImageModal: false,
  createVideoModal: false,
  createLinkModal: false,
  createChatModal: false,
  createAudioModal: false,
}

export const setCreateTextModal = (bool) => {
  return {
    type: SET_CREATE_TEXT_MODAL,
    createTextModal: bool,
  }
}

export const setCreateImageModal = (bool) => {
  return {
    type: SET_CREATE_IMAGE_MODAL,
    createImageModal: bool,
  }
}

export const setCreateQuoteModal = (bool) => {
  return {
    type: SET_CREATE_QUOTE_MODAL,
    createQuoteModal: bool,
  }
}

export const setCreateLinkModal = (bool) => {
  return {
    type: SET_CREATE_LINK_MODAL,
    createLinkModal: bool,
  }
}

export const setCreateVideoModal = (bool) => {
  return {
    type: SET_CREATE_VIDEO_MODAL,
    createVideoModal: bool,
  }
}

export const setCreateChatModal = (bool) => {
  return {
    type: SET_CREATE_CHAT_MODAL,
    createChatModal: bool,
  }
}

export const setCreateAudioModal = (bool) => {
  return {
    type: SET_CREATE_AUDIO_MODAL,
    createAudioModal: bool,
  }
}

export default function createModalsReducer(state=inititalState, action) {
  switch(action.type) {
    case SET_CREATE_TEXT_MODAL:
      state['createTextModal'] = action.createTextModal;
      return state;
    case SET_CREATE_IMAGE_MODAL:
      state['createImageModal'] = action.createImageModal;
      return state;
    case SET_CREATE_QUOTE_MODAL:
      state['createQuoteModal'] = action.createQuoteModal;
      return state;
    case SET_CREATE_LINK_MODAL:
      state['createLinkModal'] = action.createLinkModal;
      return state;
    case SET_CREATE_VIDEO_MODAL:
      state['createVideoModal'] = action.createVideoModal;
      return state;
    case SET_CREATE_CHAT_MODAL:
      state['createChatModal'] = action.createChatModal;
      return state;
    case SET_CREATE_AUDIO_MODAL:
      state['createAudioModal'] = action.createAudioModal;
      return state;
    default:
      return state;
  }
}
