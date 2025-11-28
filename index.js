import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('API working...')
})

app.listen(6001, ()=>{
    console.log(`App running at address: http://localhost:6001`)
})