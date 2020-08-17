import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
})(props => (
  <Checkbox
    value={props.checked}
    checked={props.checked}
    color='default'
    {...props}
  />
))

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState(props.isSaved)
  const [tempState, setTempState] = React.useState(true)

  const handleChange = event => {
    if (state) {
      props.removeFromDB()
    } else {
      props.saveToDB()
    }
    setState(!state)
  }
  useEffect(() => {
    setState(props.isSaved)
  })
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onChange={handleChange}
          name='checkedH'
          checked={state || false}
        />
      }
      label='Favourites'
    />
  )
}
