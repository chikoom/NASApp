import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '90%',
    maxWidth: 500,
    margin: '20px auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

export default function SearchBar(props) {
  const [query, setQuery] = useState('')
  const classes = useStyles()

  // getSearchReseults
  const getSearchReseults = e => {
    e.preventDefault()
    props.getSearchReseults(query)
  }
  const handleQueryChange = e => {
    setQuery(e.target.value)
  }

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search The Universe'
        inputProps={{ 'aria-label': 'Search The Universe' }}
        onChange={handleQueryChange}
        value={query}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
        onClick={getSearchReseults}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
