let router = require('express').Router()

router.use('/api', require('./api/clubs'))
router.use('/api', require('./api/players'))
router.use('/api', require('./api/student'))

module.exports = router
