String.prototype.supplant = function (o) {
	return this.replace(
		/{([^{}]*)}/g, 
		function (a, b) {
			var r = o[b];
			return typeof r === 'string' || typeof r === 'number' ? r : a;
		}
	);
};
module.exports={
	
	//EMPLOYEE TABLE QUERIES
	getAddEmployeeQry: function(emp){
					var qry = "insert into employee values(";
						qry +="'"+emp.EmployeeId 	+ "',";
						qry +="'"+emp.EmployeeName 	+ "',";
						qry +="'"+emp.DepartmentId 	+ "',";
						qry +="'"+emp.DateOfJoin 	+ "',";
						qry +="'"+emp.Designation 	+ "')";
					return qry;
				},
	getDeleteEmployeeQry: function(emp){
					var qry = "delete from employee where empid = '"+emp.EmployeeId+"'";
					return qry;
				},
	getUpdateEmployeeQry: function(emp){
					var qry = "UPDATE employee SET empname='" + emp.EmployeeName 	+ "', ";
						qry += "department='" + emp.DepartmentId + "', ";
						qry += "dateofjoin='" + emp.DateOfJoin + "', ";
						qry += "designation='" + emp.Designation + "' ";
						qry += "WHERE empid='" + emp.EmployeeId + "'";
					return qry;
				},
	getAllEmployeesQry:function(){
					var qry="select * from employee";
					return qry;
				},
	getEmployeeByIdQry:function(emp){
					var qry="select * from employee where empid='{employeeid}'";
					//console.log("Employee Id inside query ::: ===> "+emp.EmployeeId);
					qry = qry.supplant({employeeid:emp.EmployeeId});
					return qry;
				},

	//DEPARTMENT TABLE QUERIES

	getAllDepartmentsQry: function(){
		var qry = "SELECT departmentid, departmentname, managerid FROM department"
		return qry;
	},

	getDepartmentByIdQry: function(dep){
		var qry = "SELECT departmentid, departmentname, managerid FROM department where departmentid = '{departmentid}'";
		return qry.supplant({'departmentid':dep.DepartmentId});
	},

	getAddDepartmentQry: function(dep){
		var qry = "INSERT INTO department(departmentid, departmentname, managerid) VALUES ('{departmentid}', '{departmentname}', '{managerid}')";
		return qry.supplant({'departmentid':dep.DepartmentId,'departmentname':dep.DepartmentName,'managerid':dep.ManagerId});
	},

	getUpdateDepartmentQry: function(dep){
		var qry = "UPDATE department SET departmentid='{departmentid}', departmentname='{departmentname}', managerid='{managerid}' WHERE departmentid='{departmentid}'";
		return qry.supplant({'departmentid':dep.DepartmentId,'departmentname':dep.DepartmentName,'managerid':dep.ManagerId});
	},

	getDeleteDepartmentQry: function(dep){
		var qry = "DELETE FROM department WHERE departmentid='{departmentid}'";
		return qry.supplant({'departmentid':dep.DepartmentId,'departmentname':dep.DepartmentName,'managerid':dep.ManagerId});
	},

	//LEAVE TABLE QUERIES

	getAllLeavesQry: function(leave){
		var qry = "SELECT leaveid, employeeid, fromdate, todate, reason, comments, approverid FROM leave";
		return qry;
	},

	getLeaveByIdQry: function(leave){
		var qry = "SELECT leaveid, employeeid, fromdate, todate, reason, comments, approverid FROM leave WHERE leaveid='{leaveid}'";
		qry.supplant({leaveid:leave.LeaveId,employeeid:leave.EmployeeId,fromdate:leave.FromDate,todate:leave.ToDate,reason:leave.Reason,comments:leave.Comments,approverid:leave.ApproverId});
		return qry;
	},

	getAddLeaveQry: function(leave){
		var qry = "INSERT INTO leave(leaveid, employeeid, fromdate, todate, reason, comments, approverid) VALUES ('{leaveid}', '{employeeid}', '{fromdate}', '{todate}', '{reason}', '{comments}', '{approverid}')";
		qry.supplant({leaveid:leave.LeaveId,employeeid:leave.EmployeeId,fromdate:leave.FromDate,todate:leave.ToDate,reason:leave.Reason,comments:leave.Comments,approverid:leave.ApproverId});
		return qry;
	},

	getUpdateLeaveQry: function(leave){
		var qry = "UPDATE leave SET leaveid='{leaveid}', employeeid='{employeeid}', fromdate='{fromdate}', todate='{todate}', reason='{reason}', comments='{comments}', approverid='{approverid}' WHERE leaveid='{leaveid}'";
		qry.supplant({leaveid:leave.LeaveId,employeeid:leave.EmployeeId,fromdate:leave.FromDate,todate:leave.ToDate,reason:leave.Reason,comments:leave.Comments,approverid:leave.ApproverId});
		return qry;
	},

	getDeleteLeaveQry: function(leave){
		var qry = "DELETE FROM leave WHERE leaveid='{leaveid}'";
		qry.supplant({leaveid:leave.LeaveId,employeeid:leave.EmployeeId,fromdate:leave.FromDate,todate:leave.ToDate,reason:leave.Reason,comments:leave.Comments,approverid:leave.ApproverId});
		return qry;
	},

	//SHIFT TABLE QUERIES

	getAllShiftsQry: function(){
		var qry = "SELECT shiftid, employeeid, fromtime, totime, comments  FROM shift";
		return qry;
	},

	getShiftByIdQry: function(shift){
		var qry = "SELECT shiftid, employeeid, fromtime, totime, comments  FROM shift where shiftid='{shiftid}'";
		qry.supplant({shiftid:shift.ShiftId,employeeid:shift.EmployeeId,fromtime:shift.FromTime, totime:shift.ToTime, comments:Shift.Comments});
		return qry;
	},

	getAddShiftQry: function(shift){
		var qry = "INSERT INTO shift(shiftid, employeeid, fromtime, totime, comments) VALUES ('{shiftid}', '{employeeid}', '{fromtime}', '{totime}', '{comments}')";
		qry.supplant({shiftid:shift.ShiftId,employeeid:shift.EmployeeId,fromtime:shift.FromTime, totime:shift.ToTime, comments:Shift.Comments});
		return qry;
	},

	getUpdateShiftQry: function(shift){
		var qry = "UPDATE shift SET shiftid='{shiftid}', employeeid='{employeeid}', fromtime='{fromtime}', totime='{totime}', comments='{comments}' WHERE shiftid='{shiftid}'";
		qry.supplant({shiftid:shift.ShiftId,employeeid:shift.EmployeeId,fromtime:shift.FromTime, totime:shift.ToTime, comments:Shift.Comments});
		return qry;
	},

	getDeleteShiftQry: function(shift){
		var qry = "DELETE FROM shift WHERE shiftid='{shiftid}'";
		qry.supplant({shiftid:shift.ShiftId,employeeid:shift.EmployeeId,fromtime:shift.FromTime, totime:shift.ToTime, comments:Shift.Comments});
		return qry;		
	},

	//SHIFT ALLOCATION QUERIES

	getAllShiftAllocationQry : function(){
		var qry = "SELECT employeeid, shiftid, fromdate, todate FROM shiftallocation";
		return qry;
	},

	getShiftAllocationByIdQry : function(shiftalloc){
		var qry = "SELECT employeeid, shiftid, fromdate, todate FROM shiftallocation where employeeid='{employeeid}'";
		qry.supplant({employeeid:shiftalloc.EmployeeId, shiftid:shiftalloc.ShiftId, fromdate:shiftalloc.FromDate, todate:shiftalloc.ToDate});
		return qry;

	},

	getAddShiftAllocationQry : function(shiftalloc){
		var qry = "INSERT INTO shiftallocation(employeeid, shiftid, fromdate, todate) VALUES ('{employeeid}', '{shiftid}', '{fromdate}', '{todate}')";
		qry.supplant({employeeid:shiftalloc.EmployeeId, shiftid:shiftalloc.ShiftId, fromdate:shiftalloc.FromDate, todate:shiftalloc.ToDate});
		return qry;
	},

	getUpdateShiftAllocationQry: function(shiftalloc){
		var qry = "UPDATE shiftallocation SET employeeid='{employeeid}', shiftid='{shiftid}', fromdate'{fromdate}', todate='{todate}' WHERE employeeid='{employeeid}'";
		qry.supplant({employeeid:shiftalloc.EmployeeId, shiftid:shiftalloc.ShiftId, fromdate:shiftalloc.FromDate, todate:shiftalloc.ToDate});
		return qry;
	},

	getDeleteShiftAllocationQry: function(shiftalloc){
		var qry = "DELETE FROM shiftallocation WHERE employeeid='{employeeid}'";
		qry.supplant({employeeid:shiftalloc.EmployeeId, shiftid:shiftalloc.ShiftId, fromdate:shiftalloc.FromDate, todate:shiftalloc.ToDate});
		return qry;
	},

	getShiftAllocationForDeptQry : function(shiftalloc){
		var qry = "";
		if(shiftalloc.DepartmentId && shiftalloc.DepartmentId!==''){
		 qry = "SELECT empid, empname, department, designation, shiftallocation.shiftid FROM employee  left outer join shiftallocation on employee.empid = shiftallocation.employeeid and current_date >= shiftallocation.fromdate and shiftallocation.todate >= current_date where department = '{departmentid}'";
		}
		else{
		 qry = "SELECT empid, empname, department, designation, shiftallocation.shiftid FROM employee  left outer join shiftallocation on employee.empid = shiftallocation.employeeid and current_date >= shiftallocation.fromdate and shiftallocation.todate >= current_date";
		}
		qry = qry.supplant({departmentid:shiftalloc.DepartmentId,employeeid:shiftalloc.EmployeeId, shiftid:shiftalloc.ShiftId, fromdate:shiftalloc.FromDate, todate:shiftalloc.ToDate});
		return qry;
	},	

	//ATTENDANCE QUERIES
	getAllAttendanceQry:function(){
		var qry = "SELECT departmentid, employeeid, employeename, attendance, date FROM attendance";
		return qry;		
	},

	getAttendanceByEmpQry:function(att){
		var qry = "SELECT departmentid, employeeid, employeename, attendance, date FROM attendance where employeeid='{employeeid}'";
		qry.supplant({departmentid:att.department, employeeid:att.empid, employeename:att.empname, attendance:att.attendance, date:att.date});
		return qry;		
	},

	getAddAttendanceQry:function(att){
		var qry = "INSERT INTO attendance(departmentid, employeeid, employeename, attendance, date) VALUES ('{departmentid}', '{employeeid}', '{employeename}', '{attendance}', '{date}')";
		qry = qry.supplant({departmentid:att.department, employeeid:att.empid, employeename:att.empname, attendance:att.attendance, date:att.date});
		return qry;				
	},

	getUpdateAttendanceQry:function(att){
		var qry = "UPDATE attendance SET departmentid='{departmentid}', employeeid='{employeeid}', employeename='{employeename}', attendance='{attendance}', date='{date}' WHERE employeeid = '{employeeid}' and date = '{date}'";
		qry = qry.supplant({departmentid:att.department, employeeid:att.empid, employeename:att.empname, attendance:att.attendance, date:att.date});
		return qry;				
	},

	getDeleteAttendanceQry:function(att){
		var qry = "DELETE FROM attendance WHERE employeeid = '{employeeid}' and date = '{date}'";
		qry.supplant({departmentid:att.DepartmentId, employeeid:att.EmployeeId, employeename:att.EmployeeName, attendance:att.Attendance, date:att.Today});
		return qry;				
	},

	getAttendanceByDateQry:function(att){
		var qry = "SELECT empid, empname, department, designation, shiftallocation.shiftid, attendance.attendance, leaveid FROM employee left outer join shiftallocation on employee.empid = shiftallocation.employeeid and '{attDate}' >= fromdate and todate >= '{attDate}' left outer join attendance on employee.empid = attendance.employeeid and '{attDate}' = attendance.date";
		qry += " left outer join leave on  employee.empid = leave.employeeid and '{attDate}' >= leave.fromdate and leave.todate >= '{attDate}'"
		//constructing where query
		var depqry = "";
		if(att.DepartmentId && att.DepartmentId !== ""){
			 depqry = "employee.department = '"+att.DepartmentId+"'";
		}

		var shftqry = "";
		if(att.ShiftId && att.ShiftId !== ""){
			 shftqry = "shiftallocation.shiftid = '"+att.ShiftId+"'";
		}

		var whereqry = "";
		if(depqry !== "" || shftqry !== ""){

			whereqry = " where ";
			if(depqry !== ""){
				whereqry += depqry;
			}
			if(shftqry !== "" && depqry !==""){
				whereqry += " and ";
			}
			whereqry += shftqry;
		}

		qry += whereqry + " order by empid";

		qry = qry.supplant({'attDate':att.Date});
		return qry;		
	},

	/*********************REPORT QUERIES***************************************/

	getAttReportByDateQry:function(report){

		var qry = "SELECT count(employeeid), date  as date,  extract(day from date) as day, attendance FROM attendance";

		var whereqry = "";
		if(report.month && report.month !== ""){

			whereqry += " where extract(month from date) = "+report.month;

		}
		if(report.departmentid && report.departmentid !== ""){
			whereqry += " and departmentid = '"+report.departmentid+"' ";
		}

		qry += whereqry;
		qry += " group by date, attendance order by date"

		return qry;

	}



}