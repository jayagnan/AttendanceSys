SELECT empid, empname, department, designation, shiftallocation.shiftid, attendance, leaveid FROM employee 
left outer join shiftallocation on employee.empid = shiftallocation.employeeid and current_date >= shiftallocation.fromdate and shiftallocation.todate >= current_date 
left outer join attendance on employee.empid = attendance.employeeid and current_date = date 
left outer join leave on  employee.empid = leave.employeeid and current_date >= leave.fromdate and leave.todate >= current_date 
where employee.department = 'VicSSS' and shiftallocation.shiftid = 'S003';

