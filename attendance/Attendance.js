$(document).ready(function(){

var userapproval = 0;
var useracctype = "";

	/* Script for menu items on Portfolio template page */

	$("#hrefMarkAttendance").click(function(){

		var now = new Date();
	    var month = (now.getMonth() + 1);               
	    var day = now.getDate();
	    if(month < 10) 
	        month = "0" + month;
	    if(day < 10) 
	        day = "0" + day;
	    var today = now.getFullYear() + '-' + month + '-' + day;
	   
	   userapproval = localStorage.getItem("userapproval");
	   //alert(userapproval);
	    if(userapproval==='1'){

		$("#contents").load("Attendance.html",function(responseTxt,statusTxt,xhr){
			$("#contents").css("height","800px");
			$("#menu").css("height","800px");
				if(statusTxt == "success"){

					$("#dtAttendance").val(today);
					getDepartments(function(jsonStr){
						//alert(jsonStr);
						populateDept("slctDepartment",jsonStr);
					});

								////alert("External content loaded successfully");
								////alert(responseTxt);
				}
				if(statusTxt == "error"){
					//alert("Error :" + xhr.status + ": " + xhr.statusText);

				}

			});

	  }
	  else {
	  	$("#contents").html("Authorization required - Login with correct credentials");
	  }

	});



		$("#hrefUpdateLeave").click(function(){

		userapproval = localStorage.getItem("userapproval");
	  
	    if(userapproval==='1'){


			$("#contents").load("Leave.html",function(responseTxt,statusTxt,xhr){

					if(statusTxt == "success"){
									////alert("External content loaded successfully");
									////alert(responseTxt);
					}
					if(statusTxt == "error"){
						//alert("Error :" + xhr.status + ": " + xhr.statusText);

					}

				});

		}

		});

	$("#hrefAddEmployee").click(function(){

		 useracctype = localStorage.getItem("useracctype");
	   //alert(useracctype);
	    if(useracctype==='Admin'){


		$("#contents").load("Employee.html",function(responseTxt,statusTxt,xhr){
			$("#contents").css("height","800px");
			$("#menu").css("height","800px");

			if(statusTxt == "success"){
				////alert("External content loaded successfully");
				////alert(responseTxt);
			}
			if(statusTxt == "error"){
				//alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});

	}
	});

	$("#hrefAddDepartment").click(function(){

		useracctype = localStorage.getItem("useracctype");
	   	//alert(useracctype);
	    if(useracctype==='Admin'){


		$("#contents").load("Department.html",function(responseTxt,statusTxt,xhr){
			$("#contents").css("height","800px");
			$("#menu").css("height","800px");

			if(statusTxt == "success"){
				////alert("External content loaded successfully");
				////alert(responseTxt);
			}
			if(statusTxt == "error"){
				//alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});

	}
	});

	$("#hrefAddShift").click(function(){
			$("#contents").css("height","800px");
			$("#menu").css("height","800px");

		useracctype = localStorage.getItem("useracctype");
	   	//alert(useracctype);
	    if(useracctype==='Admin'){

		$("#contents").load("Shift.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				////alert("External content loaded successfully");
				////alert(responseTxt);
			}
			if(statusTxt == "error"){
				//alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});
	}
	});


	$("#hrefAddShiftAllocation").click(function(){
			$("#contents").css("height","800px");
			$("#menu").css("height","800px");

		useracctype = localStorage.getItem("useracctype");
	   	//alert(useracctype);
	    if(useracctype==='Admin'){

		$("#contents").load("ShiftAllocation.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				////alert("External content loaded successfully");
				////alert(responseTxt);
				getDepartments(function(jsonStr){
					//alert(jsonStr);
					populateDept("slctDepartment",jsonStr);
				});
			}
			if(statusTxt == "error"){
				//alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});
	}
	});



$("#hrefAttendanceReport").click(function(){

		  userapproval = localStorage.getItem("userapproval");
	   	//alert(userapproval);
	    if(userapproval==='1'){


		$("#contents").load("AttendanceReport.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				////alert("External content loaded successfully");
				//alert("Loaded report");
				getDepartments(function(jsonStr){
					//alert(jsonStr);
					populateDept("slctDepartment",jsonStr);
				});
				getUniqMonthYear(function(jsonStr){
					//alert(jsonStr);
					populateMonths("slctMonth",jsonStr);
				});
			}
			if(statusTxt == "error"){
				//alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});

	}

	});

	$("#contents").on("click","#btnGetEmployees",function(){

		var emp = {};
		emp.DepartmentId = $("#slctDepartment").val();

		//var json = JSON.stringify(emp);
		getEmpByDept(emp,function(jsonStr){
			//alert(jsonStr);
			populateEmp("slctEmployee",jsonStr);
		});
	});

	function getDepartments(callback){

		var url = "/attendance/department/";
				$.ajax({

				type:"GET",
				url:url,
				data:"",
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					console.log(json);
					callback(json);
				},
				error:function(err){
					console.log("Error Occured while getting dept info!!!");
					//$("#contents").html("Error Occured while getting dept info!!!"+ err);
				}
		});
	}

	function populateDept(id,jsonstr){

		var depts = JSON.parse(jsonstr);

     $('#myDropDown').append(option);
		for(var i=0; i<depts.length; i++){
			var option = $('<option />');
    	 	option.attr('value', depts[i].departmentid).text(depts[i].departmentname);
			$("#"+id).append(option);
		}
	}

	function getEmpByDept(emp,callback){

		var jsonStr = JSON.stringify(emp);
		//alert(jsonStr);
		var url = "/attendance/employee/GETEMPBYDEPT";
				$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//alert(json);
					callback(json);
				},
				error:function(err){
					console.log("Error Occured while getting dept info!!!");
					//$("#contents").html("Error Occured while getting dept info!!!"+ err);
				}
		});
	}

	function populateEmp(id,jsonstr){

		var emp = JSON.parse(jsonstr);
		
		var option = $('<option />');
    	 	option.attr('value', "").text("All");
    	 $("#"+id).empty().append(option);
		for(var i=0; i<emp.length; i++){
		   var option = $('<option />');
    	 	option.attr('value', emp[i].empid).text(emp[i].empname);
			$("#"+id).append(option);
		}

	}


	function getUniqMonthYear(callback){

		var url = "/attendance/report/GETUNIQMONTHYEAR";
				$.ajax({

				type:"GET",
				url:url,
				data:"",
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					console.log(json);
					callback(json);
				},
				error:function(err){
					console.log("Error Occured while getting dept info!!!");
					//$("#contents").html("Error Occured while getting dept info!!!"+ err);
				}
		});
	}

	function populateMonths(id,jsonstr){
		var monthList = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

		var months = JSON.parse(jsonstr);
		for(var i=0; i<months.length; i++){
			var option = $('<option />');
    	 	option.attr('value', months[i].month + ","+months[i].year).text(monthList[months[i].month] + " "+months[i].year);
			$("#"+id).append(option);

		}
	}


	$("#hrefListProjectDetails").click(function(){

		$("#contents").load("ListProjectDetails.html",function(responseTxt,statusTxt,xhr){

				if(statusTxt == "success"){
								////alert("External content loaded successfully");
								////alert(responseTxt);
				}
				if(statusTxt == "error"){
					//alert("Error :" + xhr.status + ": " + xhr.statusText);

				}

			});



	});

//***************************EMPLOYEEE*************************************************************

	$("#contents").on("click","#btnAddEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		////alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding employee!!!"+ err);
				}
		});


		////alert("After the call");

	});

	$("#contents").on("click","#btnUpdateEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		////alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating employee!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		////alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting employee!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetEmp",function(){

		var url = "/attendance/employee/GET";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
		////alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					var emps = JSON.parse(json);
					////alert(emps);
					$("#txtEmployeeId").val(emps.EmployeeId);
					$("#txtEmployeename").val(emps.EmployeeName);
					$("#txtDepartmentId").val(emps.DepartmentId);
					$("#txtDateofjoin").val(emps.DateOfJoin);
					$("#txtDesignation").val(emps.Designation);

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting employee!!!"+ err);
				}
		});



		////alert("After the call");

	});

//***************************EMPLOYEEE*************************************************************

//***************************DEPARTMENT*************************************************************

	$("#contents").on("click","#btnAddDept",function(){

		var url = "/attendance/department/";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentName").val();
		dep.ManagerId = $("#txtManagerId").val();


		var jsonStr = JSON.stringify(dep);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding Department!!!"+ err);
				}
		});


		////alert("After the call");

	});

	$("#contents").on("click","#btnUpdateDept",function(){

		var url = "/attendance/department/";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentName").val();
		dep.ManagerId = $("#txtManagerId").val();
		

		var jsonStr = JSON.stringify(dep);
		////alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating Department!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteDept",function(){

		var url = "/attendance/department/";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentName").val();
		dep.ManagerId = $("#txtManagerId").val();
		

		var jsonStr = JSON.stringify(dep);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting Department!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetDept",function(){

		var url = "/attendance/department/GET";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentName").val();
		dep.ManagerId = $("#txtManagerId").val();
		
		var jsonStr = JSON.stringify(dep);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					//alert(json);
					var deps = JSON.parse(json);
					$("#txtDepartmentId").val(deps.DepartmentId);
					$("#txtDepartmentName").val(deps.DepartmentName);
					$("#txtManagerId").val(deps.ManagerId);
					
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Department!!!"+ err);
				}
		});



		////alert("After the call");

	});






//***************************DEPARTMENT*************************************************************
//***************************LEAVE*************************************************************
$("#contents").on("click","#btnAddLeave",function(){

		var url = "/attendance/leave/";
		var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.Comments = $("#txtComments").val();
		lev.ApproverId = $("#txtApproverId").val();



		var jsonStr = JSON.stringify(lev);
		////alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding Leave!!!"+ err);
				}
		});


		////alert("After the call");

	});

	$("#contents").on("click","#btnUpdateLeave",function(){

		var url = "/attendance/leave/";
		var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.Comments = $("#txtComments").val();
		lev.ApproverId = $("#txtApproverId").val();

		var jsonStr = JSON.stringify(lev);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating Leave!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteLeave",function(){

		var url = "/attendance/leave/";
		var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.Comments = $("#txtComments").val();
		lev.Approved = $("#txtApproved").val();


		var jsonStr = JSON.stringify(lev);
		////alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting Leave!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetLeave",function(){

        var url = "/attendance/leave/GET";
        var lev = {};
		lev.LeaveId = $("#txtLeaveId").val();
		lev.EmployeeId = $("#txtEmployeeId").val();
		lev.FromDate = $("#txtFromDate").val();
		lev.ToDate = $("#txtToDate").val();
		lev.Reason = $("#txtReason").val();
		lev.comments = $("#txtcomments").val();
		lev.ApproverId = $("#txtApproverId").val();

		var jsonStr = JSON.stringify(lev);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					//alert(json);
					var levs = JSON.parse(json);
					$("#txtLeaveId").val(levs.LeaveId);
					$("#txtEmployeeId").val(levs.EmployeeId);
					$("#txtFromDate").val(levs.FromDate);
					$("#txtToDate").val(levs.ToDate);
					$("#txtReason").val(levs.Reason);
					$("#txtComments").val(levs.Comments);
					$("#txtApproverId").val(levs.ApproverId);

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Leave!!!"+ err);
				}
		});
		////alert("After the call");
	
});

//***************************LEAVE*************************************************************

//***************************SHIFT*************************************************************
$("#contents").on("click","#btnAddShift",function(){

		var url = "/attendance/shift/";
		var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.ShiftName = $("#txtShiftName").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		



		var jsonStr = JSON.stringify(shf);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding Shift!!!"+ err);
				}
		});


		////alert("After the call");

	});

	$("#contents").on("click","#btnUpdateShift",function(){

		var url = "/attendance/shift/";
		var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.ShiftName = $("#txtShiftName").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		

		var jsonStr = JSON.stringify(shf);
		////alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating Shift!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteShift",function(){

		var url = "/attendance/shift/";
		var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.ShiftName = $("#txtShiftName").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		


		var jsonStr = JSON.stringify(shf);
		////alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting Shift!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetShift",function(){

        var url = "/attendance/shift/GET";
        var shf = {};
		shf.ShiftId = $("#txtShiftId").val();
		shf.ShiftName = $("#txtShiftName").val();
		shf.FromTime = $("#txtFromTime").val();
		shf.ToTime = $("#txtToTime").val();
		shf.Comments = $("#txtComments").val();
		

		var jsonStr = JSON.stringify(shf);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					//alert(json);

					var shfs = JSON.parse(json);
					//alert(shfs.FromTime.substring(0,8));
					$("#txtShiftId").val(shfs.ShiftId);
					$("#txtShiftName").val(shfs.ShiftName);
					$("#txtFromTime").val(shfs.FromTime.substring(0,8));
					$("#txtToTime").val(shfs.ToTime.substring(0,8));
					$("#txtComments").val(shfs.comments);
					

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Shift!!!"+ err);
				}
		});



		////alert("After the call");

	});
//***************************SHIFT*************************************************************


/************************REPORT*******************************************************/

	$("#contents").on("click","#btnGetReport",function(){

		//drawBarChart();

		//alert("in get report");

		var rep = {};
		var val = $("#slctMonth").val().split(",");
		rep.month = val[0];
		rep.year = val[1];
		rep.departmentid = $("#slctDepartment").val();
		rep.reporttype = $("#slctReport").val();
		rep.empid = $("#slctEmployee").val();

		if(rep.empid && rep.empid !== ""){

			var url = "/attendance/report/GETEMPATTMONTH";


			var jsonStr = JSON.stringify(rep);
			//alert(jsonStr);

			$.ajax({
					type:"POST",
					url:url,
					data:jsonStr,
					contentType:"",
					dataType:"",
					processdata:true,
					success: function(json){
						//alert("response "+json);
						var reportList = JSON.parse(json);
						drawCal(reportList);
					},
					error:function(err){
						console.log(err);
						$("#contents").html("Error Occured while getting  report data!!!"+ err);
					}
			});
		}
		else if(rep.reporttype === 'Daywise'){

			var url = "/attendance/report/GETMONTHBYDATE";


			var jsonStr = JSON.stringify(rep);
			//alert(jsonStr);

			$.ajax({
					type:"POST",
					url:url,
					data:jsonStr,
					contentType:"",
					dataType:"",
					processdata:true,
					success: function(json){
						//alert("response "+json);
						var reportList = JSON.parse(json);
						drawBarChart(reportList);
					},
					error:function(err){
						console.log(err);
						$("#contents").html("Error Occured while getting  report data!!!"+ err);
					}
			});

	} else if(rep.reporttype === 'Monthly'){

			var url = "/attendance/report/GETMONTHLY";

			var jsonStr = JSON.stringify(rep);
			//alert(jsonStr + url);

			$.ajax({
					type:"POST",
					url:url,
					data:jsonStr,
					contentType:"",
					dataType:"",
					processdata:true,
					success: function(json){
						//alert("response "+json);
						var reportList = JSON.parse(json);
						drawPieChart(reportList);
					},
					error:function(err){
						console.log(err);
						$("#contents").html("Error Occured while getting  report data!!!"+ err);
					}
			});
	}
	


	});
/************************REPORT*******************************************************/
/************************SHIFT ALLOC*******************************************************/

$("#contents").on("click","#btnGetShiftAllocDept",function(){

		var url = "/attendance/shiftallocdept/GET";

			$("#tblShiftAlloc").DataTable();

		var shftalloc = {};
		shftalloc.DepartmentId = $("#slctDepartment").val();


		var jsonStr = JSON.stringify(shftalloc);
		//alert(jsonStr + url);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					//alert(json);
					var shftallocs = JSON.parse(json);
					////alert(shftallocs);
					var shft = {};
					var html = "";
					html = "<table id='tblShiftAlloc'>"
					html += "<thead><tr><th>EmpId</th><th>Empname</th><th>Department</th><th>Designation</th><th>ShiftId</th><th>Allocate</th></tr></thead><tbody>";
					for(var i=0;i<shftallocs.length;i++){
						////alert(JSON.stringify(shftallocs[i]));
						var empid = shftallocs[i].empid;
						var empname = shftallocs[i].empname;
						var department = shftallocs[i].department;
						var designation = shftallocs[i].designation;
						var shiftid = shftallocs[i].shiftid;
						if(!shiftid){
							shiftid = "Not allocated";
							var button = "<input type='button' class='btnalloc' data-empid="+empid+ " data-shiftid="+shiftid+" value='AddAlloc' id="+empid+" />";
						} else{
							var button = "<input type='button' class='btnalloc' data-empid="+empid+ " data-shiftid="+shiftid+" value='UpdateAlloc' id="+empid+" />";
						}

					html += "<tr><td>"+empid+"</td><td>"+empname+"</td><td>"+department+"</td><td>"+designation+"</td><td>"+shiftid+"</td><td>"+button+"</td></tr>";	

					}
					html += "</tbody></table>";

					$("#divAllocTable").html(html);
					$("#tblShiftAlloc").DataTable({"scrollX": true,"bAutoWidth":false});

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting employee!!!"+ err);
				}
		});
	});


$("#contents").on("click",".btnalloc",function(data){
	var ele = data.toElement;	
	$("#contents").load("ShiftAlloc.html",function(responseTxt,statusTxt,xhr){

		if(statusTxt == "success"){
			$('#txtEmployeeId').val(ele.id);
		}
		if(statusTxt == "error"){
			//alert("Error :" + xhr.status + ": " + xhr.statusText);

		}

	});
});

$("#contents").on("click","#btnAddShiftAlloc",function(){

	//alert("add shift allloc");

		var url = "/attendance/shiftalloc/";
		var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		



		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"PUT",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while adding ShiftAllocation!!!"+ err);
				}
		});


		////alert("After the call");

	});

	$("#contents").on("click","#btnUpdateShiftAlloc",function(){

		var url = "/attendance/shiftalloc/";
		var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		

		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while updating ShiftAllocation!!!"+ err);
				}
		});
});

	$("#contents").on("click","#btnDeleteShiftAlloc",function(){

		var url = "/attendance/shiftalloc/";
		var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		


		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"DELETE",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					$("#contents").html(json);
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while deleting ShiftAllocation!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnGetShiftAllocation",function(){

        var url = "/attendance/shiftalloc/GET";
        var shft = {};
		shft.EmployeeId = $("#txtEmployeeId").val();
		shft.ShiftId = $("#txtShiftId").val();
		shft.FromDate = $("#txtFromDate").val();
		shft.ToDate = $("#txtToDate").val();
		

		var jsonStr = JSON.stringify(shft);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					//alert(json);
					var shfts = JSON.parse(json);
					$("#txtEmployeeId").val(shfts.EmployeeId);
					$("#txtShiftId").val(shfts.ShiftId);
					$("#txtFromDate").val(shfts.FromDate);
					$("#txtToDate").val(shfts.ToDate);	

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting ShiftAllocation!!!"+ err);
				}
		});



		////alert("After the call");

	});

/************************SHIFT ALLOC*******************************************************/

/************************ATTENDANCE*******************************************************/

$("#contents").on("click","#btnGetAttendance",function(data){

//	//alert("In get attendance");
		
		$("#contents").css("height","1100px");
		$("#menu").css("height","1100px");
		
		var url = "/attendance/attendance/GETBYDATE";
		var att = {};
		att.ShiftId = $("#slctShiftId").val();
		att.DepartmentId = $("#slctDepartment").val();
		att.Date = $("#dtAttendance").val();
		
		var jsonStr = JSON.stringify(att);
		//alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
		//			//alert(json);
					var markatt = {};
					markatt = JSON.parse(json);
					var html = "<input type='hidden' id='attlist' value='"+json+"' /> <table><tr><th>EmployeeId</th><th>Emp Name</th><th>Department</th><th>Shift</th><th>Present</th><th>Absent</th><th>Leave</th></tr>";
					
					for(var i=0; i<markatt.length;i++){

						var empid = markatt[i].empid;
						var empname = markatt[i].empname;
						var dept = markatt[i].department;
						var designation = markatt[i].designation;
						var shiftid = markatt[i].shiftid !== null ? markatt[i].shiftid : "Not Allocated";
						var attendance = checkNull(markatt[i].attendance);
						var leaveid = checkNull(markatt[i].leaveid);
						if(leaveid && leaveid !== ""){
							//var bgcolor = " style = 'background-color:steelblue;' ";
							var bgcolor = " class=leave ";
						}

						html += "<tr"+bgcolor+"><td>"+empid+"</td><td>"+empname+"</td><td>"+dept+"</td><td>"+shiftid+"</td>";

						switch(attendance){

							case "PRESENT" : html += "<td> <input type='radio' name='"+empid+"' value='PRESENT' checked /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='ABSENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='LEAVE'  /> </td> ";	break;
							case "ABSENT" : html += "<td> <input type='radio' name='"+empid+"' value='PRESENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='ABSENT' checked /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='LEAVE'  /> </td> ";	break;
							case "LEAVE" : html += "<td> <input type='radio' name='"+empid+"' value='PRESENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='ABSENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='LEAVE' checked /> </td> ";	break;
							default : 		
										if(leaveid && leaveid !== ""){
											html += "<td> <input type='radio' name='"+empid+"' value='PRESENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='ABSENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='LEAVE' checked /> </td> ";	
										} else{
											html += "<td> <input type='radio' name='"+empid+"' value='PRESENT' checked /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='ABSENT'  /> </td> ";
											 html += "<td> <input type='radio' name='"+empid+"' value='LEAVE'  /> </td> ";	



										}	 
											break;


						}

						html +=  "</tr>";
					bgcolor = "";
					}
					html += "</table>";

					$("#divAttendance").html(html);
					
				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting Attendance Info!!!"+ err);
				}
		});
});


$("#contents").on("click","#btnMarkAttendance", function(){

//	//alert("JSON - inside mark attendance");
	var json = $("#attlist").val();
	var attList = JSON.parse(json);

	console.log("Attlist ==> "+json);

	var radioList = $("input[type='radio']:checked");

	console.log(radioList[0].value);

	for(var i=0; i<attList.length; i++){
		
		if(attList[i].empid === radioList[i].name){
			attList[i].attendance = radioList[i].value;
			attList[i].date = $("#dtAttendance").val();
		}

	}

	var jsonStr = JSON.stringify(attList);

	var url = "/attendance/attendance/MarkAttendance";
	$.ajax({

			type:"POST",
			url:url,
			data:jsonStr,
			contentType:"",
			dataType:"",
			processdata:true,
			success: function(json){
				$("#divAttendance").html(json);
			},
			error:function(err){
				console.log(err);
				$("#divAttendance").html("Error Occured while adding employee!!!"+ err);
			}
	});



});


/************************ATTENDANCE*******************************************************/

function checkNull(obj){

	return obj === null ? "" : obj;
}


$("#contents").on("click","#btnCreateAccount",function(){

//alert("In JS");
	var url = "/attendance/user/addaccount";
	var user = {};
	user.userid = $("#txtUserId").val();
	user.password = $("#pwdPassword").val();
	user.acctype = $("#slctAccType").val();
	

	var jsonStr = JSON.stringify(user);
	////alert(jsonStr);

	$.ajax({

			type:"PUT",
			url:url,
			data:jsonStr,
			contentType:"",
			dataType:"",
			processdata:true,
			success: function(json){
				$("#contents").html(json);
			},
			error:function(err){
				console.log(err);
				$("#contents").html("Error Occured while adding user account!!!"+ err);
			}
	});


	////alert("After the call");

});

$("#contents").on("click","#btnLogin",function(){

//alert("In JS");
	var url = "/attendance/user/validateuser";
	var user = {};
	user.userid = $("#txtUserId").val();
	user.password = $("#pwdPassword").val();
	user.acctype = $("#slctAccType").val();
	

	var jsonStr = JSON.stringify(user);
	////alert(jsonStr);

	$.ajax({

			type:"PUT",
			url:url,
			data:jsonStr,
			contentType:"",
			dataType:"",
			processdata:true,
			success: function(json){
				//alert("inside success "+json);
					var jsonObj = JSON.parse(json);
					 userapproval = jsonObj.approved;
					 useracctype =  jsonObj.acctype;
					 localStorage.setItem("userapproval",jsonObj.approved);
					 localStorage.setItem("useracctype",jsonObj.acctype);
					 //alert("app "+userapproval);
					 //alert("actype "+useracctype);
				$("#contents").html(JSON.stringify(json));

				/*************************************************/
				url = "/attendance/AttendanceTemplate.html";
				$.ajax({

					type:"GET",
					url:url,
					data:jsonStr,
					contentType:"",
					dataType:"",
					processdata:true,
					success: function(json){
						$("#page").html(json);
					},
					error:function(err){
						console.log(err);
						$("#contents").html("Error Occured while loading template page!!!"+ err);
					}
			});

				/*************************************************/

			},
			error:function(err){
				console.log(err);
				$("#contents").html("Error Occured while adding user account!!!"+ err);
			}
	});


	////alert("After the call");

});


});