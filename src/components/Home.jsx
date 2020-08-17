import React from 'react'
import MediaCard from './MediaCard'

const Home = props => {
  return (
    <MediaCard
      saveToDB={props.saveToDB}
      removeFromDB={props.removeFromDB}
      cardData={props.homeCardData}
    />
  )
}
export default Home
