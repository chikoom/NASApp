import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export default function BackButton() {
  const history = useHistory()
  const classes = useStyles()
  const handleBackClick = () => {
    history.push('/favourites')
  }
  return (
    <div>
      <Button
        onClick={handleBackClick}
        variant='contained'
        color='secondary'
        size='small'
        className={classes.button}
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </div>
  )
}
