import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function CustomizedSnackbars(props) {
  const classes = useStyles()
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      props.setSnackBarState({ open: false, msg: '' })
    }
    props.setSnackBarState({ open: false, msg: '' })
  }
  return (
    <div className={classes.root}>
      <Snackbar
        open={props.state.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity='success'>
          {props.state.msg}
        </Alert>
      </Snackbar>
    </div>
  )
}
