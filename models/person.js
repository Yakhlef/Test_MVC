var mysqlMgr = require('./mysql').mysqlMgr,
  util=require('util');
exports.personMgr = {
  addPerson : function(body,cb){
    console.log(body);
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `person` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },

  getPeople : function(cb){
    mysqlMgr.connect(function (conn) {

      conn.query('SELECT `id_person`,`name`,`age`,`phone`, DATE_FORMAT(`DOB`, "%d-%m-%Y") as DOB FROM `person` ',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  getPeopleBy_id : function(id,cb){
    mysqlMgr.connect(function (conn) {

      conn.query('SELECT `id_person`,`name`,`age`,`phone`, DATE_FORMAT(`DOB`, "%Y-%m-%d") as DOB FROM `person` WHERE `id_person` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  UpdatePerson : function(body,cb){
    mysqlMgr.connect(function (conn) {
      console.log(body);
      conn.query('UPDATE `person` SET ? WHERE `id_person` = ?',  [body,body.id_person],  function(err, result) {
        conn.release();
        if(err) {
          console.log(err);
          cb(err,null);
        } else {
          cb(null,result);
        }
      });
    });
  },
  
};