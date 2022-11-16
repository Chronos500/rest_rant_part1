const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('we will GET /places')
})

module.exports = router

