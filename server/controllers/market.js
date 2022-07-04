//This is where we get the requests from the models fro the user can add his market and sell it :

const market = require('../database/models/market.js');

module.exports = {
    createMarket: (req,res)=>{
        market.addMarket([req.body.id, req.body.quantite, req.body.categorie, req.body.description, req.body.price, req.body.image_url, req.body.title, req.body.tel],(err,results)=>{
            if(err) {
                console.log(err)
                res.status(409).send()
            }else  {
                res.status(201).send("market has been add it")
            }
        })
    },
    getMarketsByuserName: (req, res) => {
        market.getAllMarkets(async (err, result) => {
            if (err) { 
                console.log(err)
                res.status(500).send()
            }
            else {
           
            const Target = await result.filter(market => market.tel.toLowerCase() === req.body.tel.toLowerCase());
            res.json(Target)
        }
        })
    }


}