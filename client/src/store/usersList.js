const SET_ALL_USERS = 'SET_ALL_USERS';

export const setAllUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    allUsers: users
  }
}




export default function usersListReducer(state={}, action) {
  switch (action.type){
    case SET_ALL_USERS:
      return action.allUsers;
    default:
      return state;
  }
}
