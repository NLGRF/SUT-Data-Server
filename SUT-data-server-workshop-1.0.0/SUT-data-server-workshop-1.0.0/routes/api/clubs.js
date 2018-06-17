const router = require('express').Router()
const Club = require('../../models/club')

router.get('/clubs',async function(req, res) {
 const club = await Club.find()
      res.json(club)
})

router.get('/clubs/:id', (req, res) => {
  res.json({ message: `GET /clubs/${req.params.id}` })
})

router.post('/clubs/', (req, res) => {
  res.json({ message: 'POST /club', data: repq.body })
})

router.delete('/clubs/:id', (req, res) => {
  res.json({ message: `DELETE /clubs/${req.params.id}` })
})

module.exports = router
