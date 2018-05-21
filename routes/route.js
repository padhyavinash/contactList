const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

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

/*
//retrieving contacts of specific id -- TESTING
router.get('/contacts/:fname/:lname',(req, res, next)=>{
    Contact.find({first_name: req.params.fname,
        last_name: req.params.lname},function(err,contacts){
        res.json(contacts);
    })
});
*/

//retrieving contacts
router.get('/contacts',(req, res, next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    })
});


//adding contacts
router.post('/contact',(req, res, next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msg:'Failed to add contact'});
        }
        else
        {
            res.json({msg:'Contact added successfully'});
        }
    });

});

//deleting contacts
router.delete('/contact/:id',(req, res, next)=>{
    Contact.remove({_id: req.params.id},function(err,result){
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