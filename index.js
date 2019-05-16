const express = require('express');
const multer = require('multer');
/**
 * check file type
 * check file size
 * rename file
 */
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'public/images/')
    },
    filename: (req, file,cb)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})
const upload = multer({ 
    // dest: 'public/images/'
    storage 
})
const app = express();
app.listen(3000)
app.set('view engine', 'ejs');

app.get('/upload-file',(req,res)=>{
    res.render('form',{error: null});
})
// app.post('/upload-file',
// upload.single('avatar'),
// (req,res)=>{
//     const avatar = req.file
//     const name = req.body.txtName;
//     res.send({ name, avatar })
// })

app.post('/upload-file',(req,res)=>{
    upload.array('avatar',2)(req,res,err=>{
        if(err) 
            return res.render('form',{
                error: err.message
            });
        const avatar = req.files
        const name = req.body.txtName;
        res.send({ name, avatar })
    })
    
})