const router = require('express').Router()
const Student = require('../../models/student')

router.get('/student', function(req, res) {
  Student.find().then(data => {
      res.json(data)
    }).catch(error => {
      res.status(400).json(error)
  })
})

router.get('/student/:id', async (req, res) => {
  try{
      const data  = await Student.find({_id:req.params.id }) 
      res.json(data)
  }catch(err){
      res.status(400).json(err)
  }
})

router.post('/student/', (req, res) => {
    let payload = req.body
    let student = new Student({
      name: payload.name,
      score: payload.score
    }) 
    student.save().then(data => {
    res.json(data).catch(error => {
              res.status(400).json(error)
    })
    })
})
router.put('/student/:id', (req, res) => {
  const { id } = req.params
  const {name,score} = req.body
  const update ={ $set: {name,score}}
  const option = { new : true}
  Student.findByIdAndUpdate(id, update ,option).then(data => {
           res.json(data)
      }).catch(error => {
          res.status(400).json(error)
  })
 })

router.delete('/student/:id',  (req, res) => {
  const _id = req.params.id
  Student.remove({ _id }).then(data => {
        res.json(data)
  }).catch(error => {
        res.status(400).json(error)
  })
})

module.exports = router