import axios from 'axios'

const saveToDB = async mediaObject => {
  return await axios.post('http://localhost:3000/media', mediaObject)
}

const removeFromDB = async mediaId => {
  return await axios.delete(`http://localhost:3000/media/${mediaId}`)
}

const getFavourites = async () => {
  return await axios.get('http://localhost:3000/medias')
}

const getAPOD = async () => {
  return await axios.get(
    'https://api.nasa.gov/planetary/apod?api_key=dwGBqWBqAvRNqVhl5cgxZCdumM8Z9Mv5r89H4x3y'
  )
}

const apiUtils = {
  saveToDB,
  getFavourites,
  removeFromDB,
  getAPOD,
}
export default apiUtils
