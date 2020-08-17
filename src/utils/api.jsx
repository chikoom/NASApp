import axios from 'axios'

const saveToDB = async mediaObject => {
  const result = await axios.post('http://localhost:3000/media', mediaObject)
  return result
}

const removeFromDB = async mediaId => {
  const result = await axios.delete(`http://localhost:3000/media/${mediaId}`)
}

const getFavourites = async () => {
  const results = await axios.get('http://localhost:3000/medias')
  return results
}

const apiUtils = {
  saveToDB,
  getFavourites,
  removeFromDB,
}
export default apiUtils
