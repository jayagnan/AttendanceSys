var employee = require('./scripts/Employee');
var department = require('./scripts/Department');
var leave      = require('./scripts/Leave');
var shift      = require('./scripts/Shift');
var shiftalloc = require('./scripts/ShiftAlloc');
var attendance = require('./scripts/Attendance');
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

if(pathname.indexOf('/attendance/leave/') !== -1){

		if(request.method === 'GET'){
			console.log("PathName => "+ pathname + "GET Request");
			if(data === null){
				leave.getLeaves(response);
			}
			else{				
				leave.getLeaveById(response,data);
			}
		}

		if(request.method === 'POST'){
			if(pathname === '/attendance/leave/GET' ){
				leave.getLeaveById(response,data);
			}else{
				leave.updateLeave(response,data);
			}
		}

		if(request.method === 'PUT'){
			leave.addLeave(response,data);			
		}
		
		if(request.method === 'DELETE'){
			leave.deleteLeave(response,data);			
		}
	}

 if(pathname.indexOf('/attendance/shift/') !== -1){

		if(request.method === 'GET'){
			console.log("PathName => "+ pathname + "GET Request");
			if(data === null){
				shift.getShift(response);
			}
			else{				
				shift.getShiftById(response,data);
			}
		}

		if(request.method === 'POST'){
			if(pathname === '/attendance/shift/GET' ){
				shift.getShiftById(response,data);
			}else{
				shift.updateShift(response,data);
			}
		}

		if(request.method === 'PUT'){
			shift.addShift(response,data);			
		}
		
		if(request.method === 'DELETE'){
			shift.deleteShift(response,data);			
		}
	}
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
			}else if(pathname === '/attendance/shiftallocdept/GET' ){
				console.log("Router ==> "+data);
				shiftalloc.getShiftAllocationForDept(response,data);
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
if(pathname.indexOf('/attendance/attendance/') !== -1){

		if(request.method === 'GET'){
			console.log("PathName => "+ pathname + "GET Request");
			if(data === null){
				attendance.getAllAttendance(response);
			}
			else{				
				attendance.getShiftAttendanceById(response,data);
			}
		}

		if(request.method === 'POST'){
			if(pathname === '/attendance/attendance/GET' ){
				attendance.getAttendanceById(response,data);
			}else{
				attendance.updateAttendance(response,data);
			}
		}

		if(request.method === 'PUT'){
			attendance.addAttendance(response,data);	

		}
		
		if(request.method === 'DELETE'){
			attendance.deleteAttendance(response,data);			
		}
	}
exports.route = route;