import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colors = {
  text: 'white',
  background: 'rgb(29, 161, 242)',
  backgroundHover: 'rgb(26, 145, 218)',
  backgroundDisabled: ''
};

const useStyles = makeStyles({
  root: {
    color: colors.text,
    backgroundColor: colors.background,
    '&:hover': {
      backgroundColor: colors.backgroundHover
    },
    '&:disabled': {
      backgroundColor: colors.background,
      opacity: '.5',
      color: colors.text
    }
  }
})

function AuthSubmitButton(props) {
  const classes = useStyles();
  return (
    <Button
      type='submit'
      classes={classes}
      size='large'
      disableElevation
      variant='contained'
      {...props}
       />
  )
}

export default AuthSubmitButton;
