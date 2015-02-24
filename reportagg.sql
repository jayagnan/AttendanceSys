SELECT count(employeeid), date, extract(day from date) as day, attendance
  FROM attendance where extract(month from date) = 2 and departmentid = 'VicSSS' group by date, attendance order by date;

  SELECT count(employeeid), date + 1 as date,extract(day from date) as day, attendance FROM attendance where extract(month from date) = 1 group by date, attendance order by date
