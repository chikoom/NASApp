import React, { useEffect } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState(props.isSaved)

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
