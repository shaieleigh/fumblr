import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './auth';
import createModalReducer from './createModals';
import dotReducer from './beforeAuth';
import blogsList from './blogs';
import usersList from './usersList';
import createBlog from './createBlogs';

const rootReducer = combineReducers({
  auth,
  blogsList,
  usersList,
  createModalReducer,
  dotReducer,
  createBlog,
});

let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  storeEnhancer = applyMiddleware(thunk);
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    storeEnhancer
  )
}
