const express =require('express');
const app =express();
const cors =require('cors');
const port =process.env.PORT || 5000;

const catagoris = require('./data/catagoris.json');
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/news-catagoris',(req,res)=>{
    res.send(catagoris)
})
app.listen(port,()=>{
    console.log('Hello world')
})