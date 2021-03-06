import React from 'react'
import MediaCard from './MediaCard'

const Favourites = props => {
  return (
    <div>
      {props.favouritesList.length > 0 && (
        <div id='results'>
          {props.favouritesList.map(result => (
            <MediaCard
              saveToDB={props.saveToDB}
              removeFromDB={props.removeFromDB}
              key={result._id}
              cardData={result}
              isSaved={true}
            />
          ))}
        </div>
      )}
    </div>
  )
}
export default Favourites
