const SET_CREATE_MODAL = 'SET_CREATE_MODAL';

const inititalState = {
  createModal: 'none',
}

export const setCreateModal = (whichModal) => {
  return {
    type: SET_CREATE_MODAL,
    createModal: whichModal,
  }
}

export default function createModalsReducer(state=inititalState, action) {
  switch(action.type) {
    case SET_CREATE_MODAL:
      state['createModal'] = action.createModal;
      return state;
    default:
      return state;
  }
}
