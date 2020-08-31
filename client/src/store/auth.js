import Cookies from 'js-cookie';

const SET_USER = 'auth/SET_USER';

const setUser = (user) => {
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
      dispatch(setUser(res.data));
    }
    return res;
  };
};
