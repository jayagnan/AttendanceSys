SELECT count(employeeid), date, extract(day from date), attendance
  FROM attendance where extract(month from date) = 1 and departmentid = 'VicSSS' group by date, attendance order by date;
