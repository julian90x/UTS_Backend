const req = require("express/lib/request")

let sewamobil = [   {mobil:'avanza', nama:'Mansur',plat:"P 3128 XL", thnmobil:"2019",create:new Date()},
                    {mobil:'ertiga', nama:'Subi',plat:"P 4567 AB", thnmobil:"2020",create:new Date()},
                    {mobil:'livina', nama:'Avin',plat:"L 1989 AE", thnmobil:"2018",create:new Date()},
                    {mobil:'xenia', nama:'Revan',plat:"S 3417 UHA", thnmobil:"2021",create:new Date()},
                ]
                const cari=(arrData,mobil)=>{
                    ketemu =-1
                    indeks =0
                    while (ketemu== -1 && indeks < arrData.length) {
                        if(arrData[indeks].mobil == mobil){
                            ketemu=indeks
                            return indeks
                        }
                        indeks++
                    }
                    return -1
                }

                module.exports={
                    getsewamobil : sewamobil ,

                    insert : (req)=>{
                        const newItem={
                            mobil:req.body.mobil,
                            nama:req.body.nama,
                            plat:req.body.plat,
                            thnmobil:req.body.thnmobil
                        }
                        sewamobil.push(newItem)
                        return newItem
                    }
                }