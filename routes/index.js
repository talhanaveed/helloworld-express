var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title : 'demo-app' });
  
/*
  var Connection = require('tedious').Connection;  
    var config = {  
        server: 'sqldemoapp.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: '', //update me
                password: ''  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'sqldemoapp1'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
        executeStatement(); 
    });
    
    connection.connect();

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("SELECT name FROM users", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + ", ";  
              }  
            });  
            console.log(result);  
            //result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
            res.render('index', { title : result });
        });
        connection.execSql(request);  
        console.log(result);

    } 
    */
});

module.exports = router;
