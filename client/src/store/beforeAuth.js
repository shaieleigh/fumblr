const SET_DOT = 'SET_DOT';

export const setDot = (whichDot) => {
  return {
    type: SET_DOT,
    dot: whichDot
  }
}

const init = {
  dot: 'none',
}

export default function dotReducer(state=init, action) {
  switch(action.type) {
    case SET_DOT:
      const setDot = action.dot;
      state['dot'] = setDot;
      return state;
    default:
      return state;
  }
}
