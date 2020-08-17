import React, { useEffect, useState } from 'react'
import MediaCard from './MediaCard'
import BackButton from './BackButton'

const SingleMedia = props => {
  console.log(props.match.params.id)
  console.log(props.favouritesList)

  useEffect(() => {
    const result = props.favouritesList.find(
      item => item._id === props.match.params.id
    )
    console.log(props.favouritesList)
    console.log(result)
  })
  const result = props.favouritesList.find(
    item => item._id === props.match.params.id
  )
  return (
    <div>
      {props.favouritesList.find(
        item => item._id === props.match.params.id
      ) && (
        <MediaCard
          saveToDB={props.saveToDB}
          removeFromDB={props.removeFromDB}
          cardData={props.favouritesList.find(
            item => item._id === props.match.params.id
          )}
        />
      )}
    </div>
  )
}
export default SingleMedia
