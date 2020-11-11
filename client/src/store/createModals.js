const SET_CREATE_TEXT_MODAL = 'SET_CREATE_TEXT_MODAL';

const inititalState = {
  createTextModal: false,
}

export const setCreateTextModal = (bool) => {
  return {
    type: SET_CREATE_TEXT_MODAL,
    createTextModal: bool,
  }
}

export default function createModalsReducer(state=inititalState, action) {
  switch(action.type) {
    case SET_CREATE_TEXT_MODAL:
      state['createTextModal'] = action.createTextModal
      return state;
    default:
      return state;
  }
}
