var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.render("index");
});

router.get('/contact',(req, res)=>{
    res.render("contact");
});

router.get('/ping/pong', (req, res) => {
    res.render('index', { 'data': temp });
});

router.post('/api/data', (req, res) => {
    const postBody = req.body;
    console.log(postBody);
    res.end("Check Console");

});


module.exports = router;