import express from "express"

import products from "./data/products.js"

//initialize express app
const app = express()


app.get("/", (req, res)=>{
    res.send("Api is running....")
})


//fetch the product list
app.get("/api/products", (req, res)=>{
    res.json(products)
})

//this api fetch only one item from the product 
app.get("/api/products/:id", (req, res)=>{

    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})


app.listen(5000, ()=>{
    console.log(`server running of port ${5000}`)
})