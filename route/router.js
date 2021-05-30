const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Hello Node JS');
    res.render('index.ejs');
});

router.get('/about', (req, res) => {
    //res.send('Hello Node JS');
    res.render('about.ejs');
});

router.get('/contact', (req, res) => {
    //res.send('Hello Node JS');
    res.render('contact.ejs');
});

router.get('/project', (req, res) => {
    //res.send('Hello Node JS');
    res.render('project.ejs');
});

router.get('/service', (req, res) => {
    //res.send('Hello Node JS');
    res.render('service.ejs');
});

router.post('/contact-data',(req, res)=>{
    const data = req.body;
    console.log(data);
})

module.exports = router;