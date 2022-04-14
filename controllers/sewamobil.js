
const modelSewamobil = require('../models/sewamobil')

module.exports={
    getSewamobil: (req,res)=>{
        sewamobil= modelSewamobil.getSewamobil
        res.json(sewamobil)
    },
    insert : (req,res)=>{
        // ambildata request dari frontend
        newItem = modelSewamobil.insert(req)
        res.status(201).json(newItem)
        
    },
    getSewamobilbymobil:   (req,res)=>
    {
        // MENAMPILKAN DATA 
        mobil = req.params.mobil
            indeks =cari(sewamobil,mobil)
            if(indeks != -1){
                const dataSewamobil ={mobil:sewamobil[indeks].mobil,
                                        nama:sewamobil[indeks].nama,
                                        plat:sewamobil[indeks].plat,
                                        thnmobil:sewamobil[indeks].thnmobil
                
                }
                res.json(dataSewamobil)
            }
            else{
                res.send('sewamobil dengan mobil : ' +mobil + 'tidak ditemukan')
            }
        res.send('sewamobil dengan mobil: ' + req.params.mobil)
    },

    update:(req,res)=>{
        // UPDATE
        mobil =req.params.mobil
        indeks= cari(sewamobil,mobil)
        if (indeks != -1) {
            sewamobil[indeks].mobil=mobil
            sewamobil[indeks].nama= req.body.nama
            sewamobil[indeks].plat=req.body.plat
            sewamobil[indeks].thnmobil=req.body.thnmobil

            res.json(sewamobil[indeks])
        }
        else{
            res.send('Data sewamobil dengan mobil' + req.params.mobil + 'tidak ketemu')
        }
       
    },

    delete:(req,res)=>{
        mobil=req.params.mobil
        indeks=cari(sewamobil,mobil)
        
        if (indeks !=-1) {
            sewamobil.splice(indeks,2)
            

            res.send('sewamobil dengan mobil '+mobil+'telah dihapus')
            
        }
        else{
            res.send('Data sewamobil dengan mobil' + req.params.mobil + 'tidak ditemukan')
        }
        
    }
}