import React, { useState, useEffect } from 'react'
import apiUtils from './utils/api'
import CssBaseline from '@material-ui/core/CssBaseline'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import Favourites from './components/Favourites'
import SingleMedia from './components/SingleMedia'
import SnackBar from './components/SnackBar'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import 'fontsource-roboto'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#26c6da',
    },
    secondary: {
      main: '#ab47bc',
    },
  },
})

function App() {
  const [favouritesList, setFavouritesList] = useState([])
  const [homeCardData, setHomeCardData] = useState({})
  const [snackBarState, setSnackBarState] = useState({ open: false, msg: '' })

  const saveToDB = async mediaObject => {
    const result = await apiUtils.saveToDB(mediaObject)
    const newFavourites = [...favouritesList]
    const addedItem = newFavourites.find(item => item._id === result.data._id)
    if (addedItem) addedItem.isSaved = true
    else newFavourites.push(result.data)
    setFavouritesList(newFavourites)
    setSnackBarState({ open: true, msg: 'Saved to favourites!' })
  }

  const removeFromDB = async mediaId => {
    await apiUtils.removeFromDB(mediaId)
    const newFavourites = [...favouritesList]
    const removedItem = newFavourites.find(item => item._id === mediaId)
    removedItem.isSaved = false
    setFavouritesList(newFavourites)
    setSnackBarState({ open: true, msg: 'Removed from favourites!' })
  }

  const isInFavourites = title => {
    const result = favouritesList.find(
      mediaElement => mediaElement.title === title
    )
    return result
      ? { isSaved: result.isSaved, _id: result._id }
      : { isSaved: false, _id: null }
  }

  useEffect(() => {
    const getFavourites = async () => {
      const results = await apiUtils.getFavourites()

      setFavouritesList(results.data)
    }
    getFavourites()
  }, [])

  useEffect(() => {
    const getAPOD = async () => {
      const result = await apiUtils.getAPOD()
      setHomeCardData({
        description: result.data.explanation,
        media_type: result.data.media_type,
        title: result.data.title,
        imageURL: result.data.url,
        isSaved: isInFavourites(result.data.title).isSaved,
      })
    }
    getAPOD()
  }, [favouritesList])

  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className='App'>
          <NavBar />
          <Redirect exact from='/' to='/home' />
          <Route
            exact
            path='/home'
            render={() => (
              <Home
                saveToDB={saveToDB}
                removeFromDB={removeFromDB}
                homeCardData={homeCardData}
                isInFavourites={isInFavourites}
              />
            )}
          />
          <Route
            exact
            path='/search'
            render={() => (
              <Search
                saveToDB={saveToDB}
                removeFromDB={removeFromDB}
                isInFavourites={isInFavourites}
              />
            )}
          />
          <Route
            exact
            path='/favourites'
            render={() => (
              <Favourites
                saveToDB={saveToDB}
                removeFromDB={removeFromDB}
                favouritesList={favouritesList}
                setFavouritesList={setFavouritesList}
              />
            )}
          />
          <Route
            exact
            path='/favourites/:id'
            render={({ match }) => (
              <SingleMedia
                saveToDB={saveToDB}
                removeFromDB={removeFromDB}
                favouritesList={favouritesList}
                match={match}
              />
            )}
          />
          <SnackBar state={snackBarState} setSnackBarState={setSnackBarState} />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
