var express = require('express');
var User = require('../models').User;
var router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.get('/', function(req, res){
    res.render('form.pug');
});

router.post('/', function(req, res){

    User.count({ where: { email: req.body.email } }).then(count => {
        if (count != 0) {           
            res.json({ "message" : "Bu kullanıcı hesabı daha önce alınmış" });
        } 
        else {
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                User.create({
                    email: req.body.email,
                    password: hash
                }).then(user => {
                    res.json(user);
                });
            });            
        }
    });
    
});

module.exports = router;