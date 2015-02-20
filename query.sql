﻿SELECT empid, empname, department, designation, shiftallocation.shiftid, attendance.attendance FROM employee 
left outer join shiftallocation on employee.empid = shiftallocation.employeeid and current_date >= fromdate and todate <= current_date 
left outer join attendance on employee.empid = attendance.employeeid and current_date = date 
where employee.department = 'VicSSS' and shiftallocation.shiftid = 'S003';

