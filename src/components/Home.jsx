import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MediaCard from './MediaCard'
import { PromiseProvider } from 'mongoose'

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
