import Cookies from 'js-cookie';

const CREATE_TEXT = 'CREATE_TEXT';
const CREATE_TEXT_TITLE = 'CREATE_TEXT_TITLE';
// const CREATE_IMAGE = 'CREATE_IMAGE';

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

export const createBlogGeneral = async(blog) => {
  console.log('blog inside createBlogGeneral', blog);
  console.log('token', Cookies.get('session'))
  const res = await fetch('/api/blogs/', {
    method: 'POST',
    HEADERS: {
      'Content-Type': 'application/json',
      'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
    },
    body: JSON.stringify({ blog })
  })
  if(!res.ok){
    console.error(res);
  }
  const data = await res.json();
  console.log('data', data);
  return res;

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
