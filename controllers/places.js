const router = require('express').Router()
const db = require('../models')

// GET /places/new//
router.get('/new', (req, res) => {
  res.render('places/new')
})

//get index//
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err) 
    res.render('error404')
  })
})


//get show//
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



//POST /places
 router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('places/new', { message })
  }
  else {
      res.render('error404')
  }
  })
})


//comments//
router.post('/:id/comment', (req, res) => {
  console.log('post comment', req.body)
  if (req.body.author === '') { req.body.author = undefined }
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
      .then(place => {
  db.Comment.create(req.body)
       .then(comment => {
      place.comments.push(comment.id)
       place.save()
                      .then(() => {
         res.redirect(`/places/${req.params.id}`)
                })
         .catch(err => {
          res.render('error404')
                      })
            })
              .catch(err => {
                  res.render('error404')
              })
      })
      .catch(err => {
          res.render('error404')
      })
})

//delete comments//
router.delete('/:id/comment/:commentId', (req, res) => {
  db.Comment.findByIdAndDelete(req.params.commentId)
      .then(() => {
          console.log('Success')
          res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})


//delete


router.delete('/:id', (req, res) => {
db.Place.findByIdAndDelete(req.params.id)
.then(() => {
    res.redirect('/places')
})
.catch(err => {
    console.log('err', err)
    res.render('error404')
})
})


//get edit//
router.get('/:id/edit', (req, res) => {
db.Place.findById(req.params.id)
.then(place => {
  res.render('places/edit', { place })
})
.catch(err => {
    console.log('err', err)
    res.render('error404')
})
})







// PUT ROUTES

router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${req.params.id}`)
  }
})



module.exports = router


/*
router.put('/:id', (req, res) => {
res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('GET /places/:id/rant/:rantId stub')
})










//old delete route no mongoose//

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


//old edit//

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id], id })
  }
})


*/