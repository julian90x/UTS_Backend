const express = require("express");
const routerSewamobil = express.Router()
const controllerSewamobil = require('../controllers/sewamobil')


// squential search


routerSewamobil.route('/sewamobil')
    .get(controllerSewamobil.getSewamobil )

    .post( controllerSewamobil.insert)
                
routerSewamobil.route('/sewamobil')
    .get( (req,res)=>{
        res.send(sewamobil)
    })

    .post( (req,res)=>{
        res.send('Data sewamobil Sukses Tersimpan')
    })

routerSewamobil.route('/sewamobil/:mobil')
    .put( controllerSewamobil.update)

    // session delete 
    .delete(controllerSewamobil.delete)
    .get(controllerSewamobil.getSewamobilbymobil)

routerSewamobil.get('/sewamobil/:nama/:plat', (req,res)=>{
    const nama = req.params.nama
    const plat = req.params.plat
    res.send('sewamobil nama : ' + nama + 'plat :' + plat)
})
    module.exports=routerSewamobil