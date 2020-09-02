import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

export const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

export const login = (username, password) => {
  return async dispatch => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const res = await fetch('/api/session', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({ username, password})
    });
    res.data = await res.json(); // { user: {...username, id, email etch} }
    if(res.ok) {
      dispatch(setUser(res.data.user));
    }
    return res;
  };
};

export const signup = (username, password, email) => {
  return async dispatch => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const res = await fetch('/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({username, password, email})
    });
    res.data = await res.json();
    if(res.ok) {
      dispatch(setUser(res.data.user))
    }
    return res;
  }
}


export default function authReducer(state={}, action) {
  switch (action.type){
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
