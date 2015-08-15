var express = require('express');
// var personMgr = require('../models/person').personMgr;
var router = express.Router();
var models  = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/person', function(req, res, next) {
  models.Person.findAll({
    where: {
      // status: 1
    }
  }).then(function(results) {
      res.render('person', { title: 'person',people:results });
  });
});

/* GET home page. */
router.post('/addPersonView', function(req, res, next) {
  models.Person.create(req.body).then(function() {
    res.redirect('/person');
  });
});


router.post('/editPerson', function(req, res) {
  models.Person.find({
    where: {
      id: req.body.id
    }
  }).then(function (todo) {
    todo.updateAttributes(req.body).then(function (todo) {
      res.redirect('/person');
    }).catch(function (err) {
        console.log(err);
    });
  });
});

router.post('/deletePerson', function(req, res) {
  models.Person.destroy({
    where: {
      id: req.body.id2
    }
  }).then(function (todo) {
    res.redirect('/person');
  });
});
// models.Department.find({
//     where: {
//       id: id
//     }
//     }).then(function (todo) {
//     todo.updateAttributes(req.body).then(function (todo) {
//       res.redirect('/departments');
//     }).catch(function (err) {
//         console.log(err);
//     });
//   });

// /* GET home page. */
// router.post('/addPersonView', function(req, res, next) {
//   personMgr.addPerson(req.body,function(err,result){
//     console.log(result);
//     res.redirect("/person");
//   })
// });

// /* GET home page. */
// router.get('/person', function(req, res, next) {
//   personMgr.getPeople(function(results){
//     console.log(results);
//     res.render('person', { title: 'person',people:results });
//   });
// });

// router.get('/editPreson/:id', function(req, res, next) {
//   personMgr.getPeopleBy_id(req.params.id,function(results){
//     res.send(results);
//     });
// });

// router.post('/editPerson', function(req, res) {
//   personMgr.UpdatePerson (req.body,function(err,result){
//     res.redirect("/person");
//   });
// });


module.exports = router;
