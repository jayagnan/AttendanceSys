var employee = require('./Employee');
var department = require('./Department.js');

function route(pathname,request,response,data,callback){

/*
	if(methodof handle[pathname] === 'function')
	{	
		// Call the corresponding request handler
		handle[pathname](response,data);
	}
	else{
		console.log("No handler found for pathname:: "+pathname);

		//* Write the error message back to the browser
		response.writeHead(404,{"Content-method":"text/plain"});
		response.write("404 content not found");
		response.end();
		//*end write the error message back to the browser

		
	}

	*/	

	if(pathname.indexOf('/attendance/employee/') !== -1){

		if(request.method === 'GET'){
			console.log("PathName => "+ pathname + "GET Request");
			if(data === null){
				employee.getAllEmployees(response);
			}
			else{				
				employee.getEmployeeById(response,data);
			}
		}

		if(request.method === 'POST'){
			if(pathname === '/attendance/employee/GET' ){
				employee.getEmployeeById(response,data);
			}else{
				employee.updateEmployee(response,data);
			}
		}

		if(request.method === 'PUT'){
			var results = employee.addEmployee(response,data,function(response){
				callback(response);
			});	

		}
		
		if(request.method === 'DELETE'){
			employee.deleteEmployee(response,data);			
		}
	}

	if(pathname.indexOf('/attendance/department/') !== -1){

		if(request.method === 'GET'){
			console.log("PathName => "+ pathname + "GET Request");
			if(data === null){
				department.getAllDepartments(response);
			}
			else{				
				department.getDepartmentById(response,data);
			}
		}

		if(request.method === 'POST'){
			if(pathname === '/attendance/department/GET' ){
				department.getDepartmentById(response,data);
			}else{
				department.updateDepartment(response,data);
			}
		}

		if(request.method === 'PUT'){
			department.addDepartment(response,data);			
		}
		
		if(request.method === 'DELETE'){
			department.deleteDepartment(response,data);			
		}
	}

}

exports.route = route;