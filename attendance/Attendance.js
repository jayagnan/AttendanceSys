$(document).ready(function(){


	/* Script for menu items on Portfolio template page */

	$("#hrefMarkAttendance").click(function(){

		$("#contents").load("Attendance.html",function(responseTxt,statusTxt,xhr){

				if(statusTxt == "success"){
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
					var emps = JSON.parse(json);
					alert(emps);
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

/************************************************/

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
					$("#contents").html("Error Occured while adding department!!!"+ err);
				}
		});


		//alert("After the call");

	});

	$("#contents").on("click","#btnUpdateDept",function(){

		var url = "/attendance/department/";
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

	$("#contents").on("click","#btnDeleteDept",function(){

		var url = "/attendance/department/";
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


$("#contents").on("click","#btnGetDept",function(){

		var url = "/attendance/department/GET";
		var emp = {};
		emp.EmployeeId = $("#txtEmployeeId").val();
		emp.EmployeeName = $("#txtEmployeename").val();
		emp.DepartmentId = $("#txtDepartmentId").val();
		emp.DateOfJoin = $("#txtDateofjoin").val();
		emp.Designation = $("#txtDesignation").val();

		var jsonStr = JSON.stringify(emp);
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
					var emps = JSON.parse(json);
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

/*******************************************************/






	//Add project function

	$("#contents").on("click","#btnAddProject",function(){

	var url = "../portfolio/project";
	alert($("#txtProjectName").val());


			var Project = new Object();
			Project.ProjectName = $("#txtProjectName").val();
			Project.ProjectManager =  $("#txtProjectManager").val();
			Project.CurrentStage =  $("#txtCurrentStage").val();



			var JsonProject = JSON.stringify(Project);

		alert(JsonProject);

		var jqxhr = $.post(url,JsonProject,function(data){

			alert("success");
			alert(data);
			$("#contents").html(data);
			});

		alert("After the call");

	});



/*

	$("#btnAddProject").click(function(){

		alert("inside click");
/*		var url = "http://localhost:8080/PortfolioMgmt/portfolio/project/listProjects";
		var jqxhr = $.get(url,function(data,status){

					alert("data :: "+data+" status ::"+status);

				});

				jqxhr.fail(function(jqXHR, textStatus, errorThrown){
					alert("error");
					alert("textStatus "+textStatus);
					alert("ErrorThrown "+errorThrown);
					});

				alert("After the call");
		//alert("status ::"+jqxhr.status);
*/

/*
	var url = "../portfolio/project";
	alert($("#txtProjectName").val());


			var Project = new Object();
			Project.ProjectName = $("#txtProjectName").val();
			Project.ProjectManager =  $("#txtProjectManager").val();
			Project.CurrentStage =  $("#txtCurrentStage").val();



			var jsonString = JSON.stringify(Project);

		alert(JsonProject);

		var jqxhr = $.post(url,jsonString,function(data){

			alert("success");
			alert(data);
			$("#contents").html(data);

			});

		alert("After the call");

	});*/



});