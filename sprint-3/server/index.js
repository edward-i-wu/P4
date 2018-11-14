let videos = require('./videos.json');
let video = require('./video.json');

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 


app.get('/videos',(req, res)=>{
    res.json(videos);
});

app.get('/videos/:id',(req, res)=>{
    let answer = video.find(item=>{return item.id=== req.params.id});
    console.log(answer);
    res.json(answer);
});

app.post('/videos/:id',(req,res)=>{

});



app.listen(8080, ()=>{console.log('listening on 8080')}); 