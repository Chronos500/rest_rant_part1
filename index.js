const express = require ('express')
const app = express()

/* first route*/
app.get('/', (req, res) =>{
 
    res.send('hello world')
})


app.listen(3000)