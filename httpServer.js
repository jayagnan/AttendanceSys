var http = require('http');
var fs = require('fs');
var url = require("url");
var router = require("./router");


function onRequest(request,response){
	//var path = 'E:/Jayakumar/Tech/Projects/AttendanceSystem/build';
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname +" Received!!!");
	request.setEncoding("utf8");
	if(pathname.indexOf('.') != -1){
		var readStream = fs.createReadStream(__dirname+pathname);
		readStream.pipe(response);
	}
	else{

		var data = "";

		request.addListener("data",
			function(postDataChunk){
				data += postDataChunk;			
			}
			
		);

		request.addListener("end",
			function(){
				console.log("Data received request Listener 'end' =>"+data);
				router.route(pathname,request,response,data);
			}
		);
	}
	
	

}

http.createServer(onRequest).listen(8081);
console.log("Server is started!!!");
