SELECT count(employeeid), date, attendance
  FROM attendance where extract(month from date) =2 group by date, attendance order by date;
