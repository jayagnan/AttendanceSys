var fs = require('fs');

var emp = {};
var allemp = {};

emp.EmpId = "1";
emp.EmpName = "J";
emp.Dep = "dep";

allemp[emp.EmpId] = emp;

fs.writeFileSync('emp.json',JSON.stringify(allemp));