const express =require('express');
const app =express();
const cors =require('cors');
const port =process.env.PORT || 5000;

const catagoris = require('./data/catagoris.json');
const news = require('./data/news.json');
app.use(cors());
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.get('/catagory/:id',(req,res)=>{
    const id =req.params.id;
    if(id==='08'){
        res.send(news)
    }
    else{
        const catagoryNews = news.filter(n=>n.category_id===id);
        res.send(catagoryNews)
    }
})
app.get('/news/:id',(req,res)=>{
    const id =req.params.id;
    const SelectedNews = news.find(n=>n._id===id);
    res.send(SelectedNews)
})
app.get('/news',(req,res)=>{
    res.send(news)
})
app.get('/news-catagoris',(req,res)=>{
    res.send(catagoris)
})
app.listen(port,()=>{
    console.log('Hello world')
})