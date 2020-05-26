const express = require('express')

const app = express()

app.get('/seccond', (req,res)=>{
    console.log("OKOKOKOK")
    res.send("OK")
})

app.listen(5000)