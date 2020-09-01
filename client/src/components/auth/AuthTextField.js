import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const colors = {
  text: 'white',
  background: 'rgb(29, 161, 242)',
  backgroundHover: 'rgb(26, 145, 218)',
  backgroundDisabled: ''
};

const useStyles = makeStyles({
  root: {
    marginBottom: '20px',
    '& label' : {
      color: colors.text
    },
    '& input': {
      color: colors.text
    }
  }
})

function AuthTextField(props) {
  const classes = useStyles();
  return (
    <TextField
      classes={classes}
      variant='filled'
      {...props}
      />
  )
}

export default AuthTextField;
