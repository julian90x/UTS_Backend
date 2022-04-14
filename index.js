const express = require('express')
const routerSewamobil = require('./routers/sewamobil')
const app = express()
const port = 3000

//MENERIMA REQ.BODY
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routerSewamobil)
app.listen(port, ()=>{
    console.log('server berjalan pada port' + port)
})