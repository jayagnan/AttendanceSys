function drawCal(data){
				var width = 600, height = 600;
				var daywidth = 70, dayheight = 70;

				var dayList = calLayout(data,daywidth,dayheight);
	
				d3.select("svg").remove();
				var canvas = d3.select("#contents")
								.append("svg")
								.attr("width",width)
								.attr("height",height);

				var chart = canvas.append("g")
									 .attr("transform","translate(100,100)");

				var cal =chart.selectAll(".cal")
								.data(dayList)
								.enter()
									.append("g")
									.attr("class",function(d){
										if(d.data){
											return d.data.Type;
										} 
										else {
											return "BLANK";
										}
										});


						cal.append("rect")
							.attr("x",function(d){return d.x;})
							.attr("y",function(d){return d.y;})
							.attr("width",function(d){return d.width;})
							.attr("height",function(d){return d.height;})
							
						cal.append("text")
							//.attr("class","day")
							.attr("x",function(d){return +d.x + 30;})
							.attr("y",function(d){return +d.y + 40;})
							.text(function(d){
										if(d.data){
											return d.data.Day;
										} 
										else {
											return "";
										}
										});
						cal.append("text")
							.attr("class","weekday")
							.attr("x",function(d){return +d.x + 30;})
							.attr("y",function(d){return +d.y + 13;})
							.attr("style","fill:white;font: 9px sans-serif;text-anchor: middle;")
							.text(function(d){
										if(d.data){
											return d.data.WeekDay;
										} 
										else {
											return "";
										}
										});

						cal.append("text")
							.attr("class","weekday")
							.attr("x",function(d){return +d.x + 35;})
							.attr("y",function(d){return +d.y + 60;})
							.attr("style","fill:white;font: 9px sans-serif;text-anchor: middle;")
							.text(function(d){
										if(d.data){
											return d.data.Month +","+d.data.Year;
										} 
										else {
											return "";
										}
										});
}