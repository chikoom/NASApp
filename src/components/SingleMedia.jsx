import React, { useEffect } from 'react'
import MediaCard from './MediaCard'

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
          showBack={true}
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
