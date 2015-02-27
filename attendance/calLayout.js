function calLayout(data,daywidth,dayheight){

	var dayList = [];
	//var daywidth = 100, dayheight = 100;
	var x= 0,  y=0;
	var dayCount = 0;
	var firstDOW = data[0].DOW;
	for(var i=0;i<firstDOW;i++){

		var day = {};
		 day.width = daywidth -1;
		 day.height = dayheight - 1;
		 day.x = x;
		 day.y = y;

		 x += daywidth;
		 
		 dayCount++;
		 dayList.push(day);
	}

	for(var i=0;i<data.length;i++){

		var day = {};
		day.width = daywidth -1 ;
		day.height = dayheight -1;
		day.x = x;
		day.y = y;

		day.data = data[i];

		dayCount++;
		x += daywidth;
		if(dayCount % 7 === 0){
			 y += dayheight;
			 x=0;
		}	

		dayList.push(day);

	}

	var lastDOW = data[data.length-1].DOW;
	for(var i=lastDOW + 1;i<7;i++){

		 var day = {};
		 day.width = daywidth -1;
		 day.height = dayheight - 1;
		 day.x = x;
		 day.y = y;

		 x += daywidth;
		 
		 dayCount++;
		 dayList.push(day);

	}
	console.log(dayList);
	return dayList;


}