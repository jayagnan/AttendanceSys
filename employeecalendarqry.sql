﻿select generate_series as dat,extract(day from generate_series),extract(dow from generate_series), attendance from generate_series ('2015-02-01'::date,'2015-02-28'::date,'1 day') left outer join attendance on  generate_series = attendance.date and employeeid = '18096'