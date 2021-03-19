import Cookies from 'js-cookie';

const CREATE_TEXT = 'CREATE_TEXT';
const CREATE_TEXT_TITLE = 'CREATE_TEXT_TITLE';
const CREATE_IMAGE = 'CREATE_IMAGE';

const initialState = {
  title: '',
  text: '',
  image: '',
}

export const createImageBlog = (image) => {
  return {
    type: CREATE_IMAGE,
    image: image
  }
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
  console.log('token', Cookies.get('XSRF-TOKEN'));

  let post = blog.blog;
  let userId = blog.userId;
  let image = post.image;
  for (var [key, value] of image.entries()) {
      console.log('key, value', key, value);
    }
  // let image2 = image.image;
  console.log('image', image);
  let res;
  console.log('%cpost.image', 'color:blue;', post.image);
  if(post.image){
    res = await fetch('/api/blogs/image', {
      method: 'POST',
      headers: {
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        // "Content-Type" : "multipart/form-data"
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      },
      // body: JSON.stringify({image, userId})
      body: image
    })
  } else {
    res = await fetch('/api/blogs/text', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
      },
      body: JSON.stringify({ post, userId })
    })
  }
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
    case CREATE_IMAGE:
      state['image'] = action.image;
      return state;
    default:
      return state;
  }
}
