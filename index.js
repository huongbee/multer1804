const express = require('express');
const multer = require('multer');
const upload = multer({ 
    dest: 'public/images/'
})
const app = express();
app.listen(3000)
app.set('view engine', 'ejs');

app.get('/upload-file',(req,res)=>{
    res.render('form');
})
app.post('/upload-file',
upload.single('avatar'),
(req,res)=>{
    const avatar = req.file
    const name = req.body.txtName;
    res.send({ name, avatar })
})