/**
 * Created by Lenovo on 1/11/2015.
 */

var pg = require('pg');

var conString = "postgres://postgres@localhost:5432/Attendance";
var query = "select * from employee";

var connexe = function(){

    pg.connect(conString,function(err,client,done){

        if(err){
            console.log("error occured!!!");
            console.log(err);
        }

        client.query(query,function(err,result){

            if(err){
                console.log("query execution error");
                console.log(err);
            }

            done();
            console.log(JSON.stringify(result.rows));

        });
        pg.end();
    });

}

connexe();

console.log("Postgre connection...");

