const express = require('express');
const upload = require('./lib/upload.config');
const app = express();
app.use(express.static('public/'))
const port = process.env.PORT || 3000;
app.listen(port)

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/upload-file',(req,res)=>{
    res.render('form',{error: null});
})
app.post('/upload-file',(req,res)=>{
    upload.single('avatar')(req, res, err=>{
        if(err) return res.send({err: err.message}) 
        const avatar = req.file
        res.send({ avatar })
    })
})

// app.post('/upload-file',(req,res)=>{
//     upload.array('avatar',2)(req,res,err=>{
//         if(err) 
//             return res.render('form',{
//                 error: err.message
//             });
//         const avatar = req.files
//         const name = req.body.txtName;
//         res.send({ name, avatar })
//     })
    
// })

// const multi = upload.fields([
//     { name: 'hinhChinh'},
//     { name:'hinhPhu', maxCount:2}
// ])
// app.post('/upload-file',(req,res)=>{
//     multi(req,res,err=>{
//         if(err) 
//             return res.render('form',{
//                 error: err.message
//             });
//         const avatar = req.files
//         const name = req.body.txtName;
//         res.send({ name, avatar })
//     })
    
// })