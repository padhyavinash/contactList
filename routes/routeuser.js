const express = require('express');
const router = express.Router();

const User = require('../models/userss');

/*
//TESTING
router.get('/',(req, res, next)=>{
    res.send('TESTING HOME PAGE');
});
*/
/*
//retrieving contacts
router.get('/contacts',(req, res, next)=>{
    res.send('Retrieving the contact list');
});
*/


//retrieving contacts of specific id -- TESTING
router.get('/login/:uname/:pwd',(req, res, next)=>{
    User.find({userName: req.params.uname,
        pwd: req.params.pwd},function(err,users){
        res.json(users);
    })
});


//retrieving contacts
router.get('/login',(req, res, next)=>{
    User.find(function(err,users){
        res.json(users);
    })
});


//adding contacts
router.post('/adduser',(req, res, next)=>{
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        userType: req.body.userType,
        userName: req.body.userName,
        pwd: req.body.pwd
    });

    newUser.save((err,user)=>{
        if(err)
        {
            res.json({msg:'Failed to add user'});
        }
        else
        {
            res.json({msg:'User added successfully'});
        }
    });

});

//deleting contacts
router.delete('/deleteuser/:id',(req, res, next)=>{
    User.remove({_id: req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

module.exports = router;