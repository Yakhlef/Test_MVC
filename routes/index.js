var express = require('express');
var personMgr = require('../models/person').personMgr;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/person', function(req, res, next) {
  personMgr.getPeople(function(results){
    console.log(results);
    res.render('person', { title: 'person',people:results });
  });
});

router.get('/editPreson/:id', function(req, res, next) {
  personMgr.getPeopleBy_id(req.params.id,function(results){
    res.send(results);
    });
});

router.post('/editPerson', function(req, res) {
  personMgr.UpdatePerson (req.body,function(err,result){
    res.redirect("/person");
  });
});

/* GET home page. */
router.post('/addPersonView', function(req, res, next) {
  personMgr.addPerson(req.body,function(err,result){
    console.log(result);
    res.redirect("/person");
  })
});
module.exports = router;
