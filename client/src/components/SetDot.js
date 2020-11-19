import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDot } from '../store/beforeAuth';

export default function SetDot(props) {
  const dispatch = useDispatch();
  
  useEffect(() => {

    function handleSetDot() {
      if(props.state.signUpDot === true) {
        dispatch(setDot('signUp'));
      } else if (props.state.aboutDot === true) {
        dispatch(setDot('about'));
      } else if(props.state.purpleDot === true) {
        dispatch(setDot('purple'));
      } else if(props.state.navyBlueDot === true) {
        dispatch(setDot('navyBlue'));
      } else if(props.state.orangeDot) {
        dispatch(setDot('orange'));
      } else if(props.state.giphyDot) {
        dispatch(setDot('giphy'));
      } else {
        dispatch(setDot(null));
      }
    }
    handleSetDot();
  })

  return (
    <div></div>
  )
}
