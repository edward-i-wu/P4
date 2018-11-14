let videos = require('./videos.json');
let video = require('./video.json');

//can possibly choose PORT to set 
const PORT = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express(); 
//app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type:'application/json'}));
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


app.get('/videos',(req, res)=>{
    res.json(videos);
});

app.get('/videos/:id', bodyParser.json(),(req, res)=>{
    let answer = video.find(item=>{return item.id=== req.params.id});
    console.log(answer);
    res.json(answer);
});

app.post('/videos/:id',(req,res)=>{
    let target = video.find(item=>{return item.id === req.params.id});
    
    let request= req.body;

    if(target
            && request.hasOwnProperty('name') 
            && request.hasOwnProperty('id') 
            && request.hasOwnProperty('comment')
            && request.hasOwnProperty('timestamp')  ){
        target.comments.push(req.body);
        console.log(target);
    }else{
        res.sendStatus(404).json('video not found');
    }
});

app.delete('videos/:videoId/:commentId')


app.listen(PORT, ()=>{console.log(`listening on ${PORT}`)}); 