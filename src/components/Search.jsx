import React, { useEffect, useState } from 'react'

import axios from 'axios'
import MediaCard from './MediaCard'
import SearchBar from './SearchBar'

const Search = props => {
  const [results, setResults] = useState([])

  const getSearchReseults = async query => {
    const results = await axios.get(
      `https://images-api.nasa.gov/search?q=${query}`
    )

    const foramtedResults = results.data.collection.items.map(result => {
      const resultToReturn = {
        description: result.data[0].description,
        media_type: result.data[0].media_type,
        title: result.data[0].title,
        nasaId: result.data[0].nasa_id,
        imageURL: result.links ? result.links[0].href : null,
        isSaved: props.isInFavourites(result.data[0].title).isSaved,
      }
      return resultToReturn
    })
    setResults(foramtedResults)
  }

  return (
    <div>
      <SearchBar getSearchReseults={getSearchReseults} />
      {results.length > 0 && (
        <div id='results'>
          {results.map(result => (
            <MediaCard
              saveToDB={props.saveToDB}
              removeFromDB={props.removeFromDB}
              isSaved={false}
              key={result.nasaId}
              cardData={result}
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default Search
