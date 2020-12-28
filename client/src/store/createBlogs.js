const CREATE_TEXT = 'CREATE_TEXT';
const CREATE_TEXT_TITLE = 'CREATE_TEXT_TITLE';
const CREATE_IMAGE = 'CREATE_IMAGE';

const initialState = {
  title: '',
  text: ''
}

export const createTextBlog = (textBlog) => {
  return {
    type: CREATE_TEXT,
    textBlog
  }
}

export const createTextTitleBlog = (textBlogTitle) => {
  return {
    type: CREATE_TEXT_TITLE,
    textBlogTitle
  }
}

export default function createBlog(state=initialState, action) {
  switch(action.type) {
    case CREATE_TEXT:
      state['text'] = action.textBlog.text;
      return state;
    case CREATE_TEXT_TITLE:
      state['title'] = action.textBlogTitle.title;
      return state;
    default:
      return state;
  }
}
