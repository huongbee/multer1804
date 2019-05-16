const express = require('express');
const app = express();
app.listen(3000)
app.set('view engine', 'ejs');

app.get('/upload-file',(req,res)=>{
    res.render('form');
})