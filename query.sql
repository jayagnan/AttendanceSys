SELECT empid, empname, department, designation, shiftallocation.shiftid, attendance, leaveid FROM employee 
left outer join shiftallocation on employee.empid = shiftallocation.employeeid and current_date >= shiftallocation.fromdate and shiftallocation.todate >= current_date 
left outer join attendance on employee.empid = attendance.employeeid and current_date = date 
left outer join leave on  employee.empid = leave.employeeid and current_date >= leave.fromdate and leave.todate >= current_date 


SELECT empid, empname, department, designation, shiftallocation.shiftid, attendance.attendance FROM employee 
left outer join shiftallocation on employee.empid = shiftallocation.employeeid and '2015-02-20' >= fromdate and todate >= '2015-02-20' 
left outer join attendance on employee.empid = attendance.employeeid and '2015-02-20' = attendance.date 
left outer join leave on  employee.empid = leave.employeeid and '2015-02-20' >= leave.fromdate and leave.todate >= '2015-02-20' order by empid

