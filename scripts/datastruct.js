var fs = require('fs');

module.exports = {
	
	get : function(fileName){
		 return fs.readFileSync(fileName,'utf8');

	},

	update : function(fileName,data){
		fs.writeFileSync(fileName,JSON.stringify(data));
	}


}