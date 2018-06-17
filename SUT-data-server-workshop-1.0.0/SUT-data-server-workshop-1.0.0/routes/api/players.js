const router = require('express').Router()
const Player = require('../../models/player')

router.get('/players',async function(req, res) {
  const player = await Player.find().populate('club','-_id').sort('age')
  res.json(player)  
})

router.get('/players/:id', (req, res) => {
  res.json({ message: `GET /players/${req.params.id}` })
})

router.post('/players/', (req, res) => {
  res.json({ message: 'POST /players', data: req.body })
})

router.delete('/players/:id', (req, res) => {
  res.json({ message: `DELETE /players/${req.params.id}` })
})

module.exports = router
