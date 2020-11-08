const SET_LAST_ITEM = 'SET_LAST_ITEM';
const SET_BLOG_LIST = 'SET_BLOG_LIST'

export const setAllBlogs = (blogs) => {
  return {
    type: SET_BLOG_LIST,
    allBlogs: blogs
  }
}

export const setLastItem = (id) => {
  return {
    type: SET_LAST_ITEM,
    id
  }
}



export default function blogReducer(state={}, action) {
  switch (action.type){
    case SET_BLOG_LIST:
      const allBlogs = action.allBlogs;
      state['allBlogs'] = allBlogs;
      return state;
    case SET_LAST_ITEM:
      const lastItemId = action.id
      state['lastItemId'] = lastItemId
      return state;
    default:
      return state;
  }
}
