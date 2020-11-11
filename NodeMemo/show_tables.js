var mysql_query = require('./DB/mysql_query2');

mysql_query('show tables', function(err, rows)   {
    if(err){
        throw err;
    }
    console.log(rows);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
});