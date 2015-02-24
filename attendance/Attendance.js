$(document).ready(function(){


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
	   

		$("#contents").load("Attendance.html",function(responseTxt,statusTxt,xhr){

				if(statusTxt == "success"){

					$("#dtAttendance").val(today);
								//alert("External content loaded successfully");
								//alert(responseTxt);
				}
				if(statusTxt == "error"){
					alert("Error :" + xhr.status + ": " + xhr.statusText);

				}

			});



	});



		$("#hrefUpdateLeave").click(function(){

			$("#contents").load("Leave.html",function(responseTxt,statusTxt,xhr){

					if(statusTxt == "success"){
									//alert("External content loaded successfully");
									//alert(responseTxt);
					}
					if(statusTxt == "error"){
						alert("Error :" + xhr.status + ": " + xhr.statusText);

					}

				});



		});

	$("#hrefAddEmployee").click(function(){

		$("#contents").load("Employee.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});
	});

	$("#hrefAddDepartment").click(function(){

		$("#contents").load("Department.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});



	});

	$("#hrefAddShift").click(function(){

		$("#contents").load("Shift.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});
	});


	$("#hrefAddShiftAllocation").click(function(){

		$("#contents").load("ShiftAllocation.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});
	});



$("#hrefAttendanceReport").click(function(){

		$("#contents").load("AttendanceReport.html",function(responseTxt,statusTxt,xhr){

			if(statusTxt == "success"){
				//alert("External content loaded successfully");
				//alert(responseTxt);
			}
			if(statusTxt == "error"){
				alert("Error :" + xhr.status + ": " + xhr.statusText);

			}

		});

	});

	$("#hrefListProjectDetails").click(function(){

		$("#contents").load("ListProjectDetails.html",function(responseTxt,statusTxt,xhr){

				if(statusTxt == "success"){
								//alert("External content loaded successfully");
								//alert(responseTxt);
				}
				if(statusTxt == "error"){
					alert("Error :" + xhr.status + ": " + xhr.statusText);

				}

			});



	});

//Add project function

	$("#contents").on("click","#btnAddEmp",function(){

		var url = "/attendance/employee/";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
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
					$("#contents").html("Error Occured while adding employee!!!"+ err);
				}
		});


		//alert("After the call");

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
					var emps = JSON.parse(json);
					//alert(emps);
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



		//alert("After the call");

	});

/**************************************************************************************************/


$("#contents").on("click","#btnGetDept",function(){

		var url = "/attendance/department/GET";
		var dep = {};
		dep.DepartmentId = $("#txtDepartmentId").val();
		dep.DepartmentName = $("#txtDepartmentName").val();
		dep.ManagerId = $("#txtManagerId").val();
		
		var jsonStr = JSON.stringify(dep);
		alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					alert(json);
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
	});

/************************REPORT*******************************************************/

	$("#contents").on("click","#btnGetReport",function(){

		drawBarChart();

		/*
		var url = "/attendance/attReport/";

		var jsonStr = JSON.stringify(emp);
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
					$("#contents").html("Error Occured while adding employee!!!"+ err);
				}
		});
	*/


	});
/************************REPORT*******************************************************/
/************************SHIFT ALLOC*******************************************************/

$("#contents").on("click","#btnGetShiftAllocDept",function(){

		var url = "/attendance/shiftallocdept/GET";
		var shftalloc = {};
		shftalloc.DepartmentId = $("#slctDepartment").val();


		var jsonStr = JSON.stringify(shftalloc);
		alert(jsonStr + url);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
					alert(json);
					var shftallocs = JSON.parse(json);
					//alert(shftallocs);
					var shft = {};
					var html = "";
					html = "<table>"
					html += "<tr><th>EmpId</th><th>Empname</th><th>Department</th><th>Designation</th><th>ShiftId</th><th>Allocate</th></tr>";
					for(var i=0;i<shftallocs.length;i++){
						//alert(JSON.stringify(shftallocs[i]));
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
					html += "</table>";

					$("#divAllocTable").html(html);

				},
				error:function(err){
					console.log(err);
					$("#contents").html("Error Occured while Getting employee!!!"+ err);
				}
		});
	});


$("#contents").on("click",".btnalloc",function(data){
	var ele = data.toElement;	
	$("#contents").load("Employee.html",function(responseTxt,statusTxt,xhr){

		if(statusTxt == "success"){
			$('#txtEmployeeId').val(ele.id);
		}
		if(statusTxt == "error"){
			alert("Error :" + xhr.status + ": " + xhr.statusText);

		}

	});
});

/************************SHIFT ALLOC*******************************************************/

/************************ATTENDANCE*******************************************************/

$("#contents").on("click","#btnGetAttendance",function(data){

//	alert("In get attendance");

		
		var url = "/attendance/attendance/GETBYDATE";
		var att = {};
		att.ShiftId = $("#slctShiftId").val();
		att.DepartmentId = $("#slctDepartment").val();
		att.Date = $("#dtAttendance").val();
		
		var jsonStr = JSON.stringify(att);
	//	alert(jsonStr);

		$.ajax({

				type:"POST",
				url:url,
				data:jsonStr,
				contentType:"",
				dataType:"",
				processdata:true,
				success: function(json){
					//$("#contents").html(json);
		//			alert(json);
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

//	alert("JSON - inside mark attendance");
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


});