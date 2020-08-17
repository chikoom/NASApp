import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: '50px',
    height: '50px',
  },
}))

const PAGES = ['home', 'search', 'favourites']

const NavBar = props => {
  const history = useHistory()
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    }
  }

  function LinkTab(props) {
    return (
      <Tab
        component='a'
        onClick={event => {
          event.preventDefault()
          history.push(props.href)
        }}
        {...props}
      />
    )
  }
  return (
    <div>
      <AppBar position='static' color='primary' title='hello'>
        <IconButton>
          <img
            src='apple-icon-precomposed.png'
            alt='logo'
            className={classes.logo}
          />
        </IconButton>
        <Tabs
          variant='fullWidth'
          value={value}
          onChange={handleChange}
          aria-label='nav tabs'
        >
          {PAGES.map((pageName, index) => (
            <LinkTab
              key={index}
              label={pageName.toUpperCase()}
              href={`/${pageName}`}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  )
}

export default NavBar
