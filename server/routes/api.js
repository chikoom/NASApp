const express = require('express')
const Media = require('../models/Media')

const router = express.Router()

router.get('/sanity', (req, res) => {
  res.send('OK')
})

router.get('/medias', async (req, res) => {
  const searchQuery = req.query.id ? { _id: req.query.id } : {}
  const images = await Media.find(searchQuery)
  res.send(images)
})

router.post('/media', async (req, res) => {
  const mediaToSave = new Media(req.body)
  const result = await mediaToSave.save()
  res.send(result)
})

router.delete('/media/:id', async (req, res) => {
  const { id } = req.params
  const result = await Media.findByIdAndDelete(id)
  res.send(result)
})
module.exports = router
