var employee = require('./scripts/Employee');
var department = require('./scripts/Department');
var shiftalloc = require('./scripts/ShiftAlloc');
var att = require('./scripts/Attendance');
var report = require('./scripts/Report');



function route(pathname,request,response,data){

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
			employee.addEmployee(response,data);	

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

	/***********************SHIFT ALLOCATION **************************/

	if(pathname.indexOf('/attendance/shiftalloc/') !== -1){

		if(request.method === 'GET'){
			console.log("PathName => "+ pathname + "GET Request");
			if(data === null){
				shiftalloc.getAllShiftAllocation(response);
			}
			else{				
				shiftalloc.getShiftAllocationById(response,data);
			}
		}

		if(request.method === 'POST'){
			if(pathname === '/attendance/shiftalloc/GET' ){
				shiftalloc.getShiftAllocationById(response,data);
			}else{
				shiftalloc.updateShiftAllocation(response,data);
			}
		}

		if(request.method === 'PUT'){
			shiftalloc.addShiftAllocation(response,data);	

		}
		
		if(request.method === 'DELETE'){
			shiftalloc.deleteShiftAllocation(response,data);			
		}
	}


	if(pathname.indexOf('/attendance/shiftallocdept/') !== -1){

		if(pathname === '/attendance/shiftallocdept/GET' ){
				console.log("Router ==> "+data);
				shiftalloc.getShiftAllocationForDept(response,data);
		}
	}

	/*********************ATTENDANCE***************************/

	if(pathname.indexOf('/attendance/attendance/') !== -1){

		if(pathname === '/attendance/attendance/GETBYDATE' ){
				console.log("Router ==> "+data);
				att.getAttendanceByDate(response,data);
		} 
		if(pathname === '/attendance/attendance/MarkAttendance' ){
				console.log("Router ==> "+data);
				att.markAttendance(response,data);
		}
	}

	/*********************REPORT***************************/

	if(pathname.indexOf('/attendance/report/') !== -1){
		
		if(pathname === '/attendance/report/GETMONTHBYDATE' ){
				console.log("Router ==> "+data);
				report.getAttReportByDate(response,data);
		} 
	
		if(pathname === '/attendance/report/GETMONTHLY' ){
				console.log("Router ==> "+data);
				report.getAttReportByMonth(response,data);
		} 

		if(pathname === '/attendance/report/GETEMPATTMONTH' ){
			console.log("Router ==> "+data);
			report.getReportByEmployee(response,data);
		} 

	}



}

exports.route = route;