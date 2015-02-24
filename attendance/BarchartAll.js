function drawBarChartAll(){

			var width = 600, height = 600;
			var barWidth = 25;
			var chartWidth = 800, chartHeight = 500;
			var margin = {top: 20, right: 30, bottom: 30, left: 60},
					    width = width - margin.left - margin.right,
					    height = height - margin.top - margin.bottom;


			var canvas = d3.select("#contents")
							.append("svg")
							.attr("class","chart")
							.attr("width", width + margin.left + margin.right)
						    .attr("height", height + margin.top + margin.bottom)
						  	.append("g")
						    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

							
			var yScale = d3.scale.linear()
							.range([chartHeight,0]);

			var yAxis = d3.svg.axis()
    						.scale(yScale)
    						.orient("left");				

			d3.json("report.json",function(data){

			var xScale = d3.scale.ordinal()
							.rangeRoundBands([0,data.length*barWidth*3],.1)
							.domain(data.map(function(d){return d.date;}))	

			var xAxis = d3.svg.axis()
    						.scale(xScale)
    						.orient("bottom");

			yScale.domain([0, d3.max(data,function(d){return Number(d.NoOfEmployeesPresent);})]);
			//xScale.domain([0, 12]);
			//console.log("xScale "+xScale);
			var bar = canvas.selectAll("g")
							.data(data)
							.enter()
								.append("g")
								.attr("transform",function(d,i){
									return "translate("+barWidth*3i+",0)";
							 	});	

						canvas.append("g")
								.attr("class","y axis")
								.attr("transform","translate(-10,0)")
								.call(yAxis)
								.append("text")
								    .attr("transform", "rotate(-90)")
								    .attr("y", 6)
								    .attr("dy", ".71em")
								    .style("text-anchor", "end")
								    .text("Num of Employees")
								    .style("fill","steelblue")

						canvas.append("g")
    							.attr("class", "x axis")
							    .attr("transform", "translate(0," + (chartHeight+5) + ")")
							    .call(xAxis)
							    .append("text")
							   		.style("text-anchor", "start")
							   		.attr("y",0)
							   		.attr("x",xScale.rangeBand())
							   		.attr("dy", "2.71em")
								    .text("Day in Month")
								    .style("fill","steelblue");
							    			
				
						bar.append("rect")
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesPresent);})
							.attr("width",barWidth-1)
							.attr("height",function(d){return chartHeight - yScale(d.NoOfEmployeesPresent);});

						bar.append("text")
							.attr("x", barWidth/2 - 2)
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployees) + 15 ;} )
							.text(function(d){return d.NoOfEmployeesPresent;});		

						bar.append("rect")
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesAbsent);})
							.attr("width",barWidth-1)
							.attr("height",function(d){return chartHeight - yScale(d.NoOfEmployeesAbsent);});

						bar.append("text")
							.attr("x", barWidth/2 - 2)
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesAbsent) + 15 ;} )
							.text(function(d){return d.NoOfEmployeesPresent;});		

						bar.append("rect")
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesLeave);})
							.attr("width",barWidth-1)
							.attr("height",function(d){return chartHeight - yScale(d.NoOfEmployeesLeave);});

						bar.append("text")
							.attr("x", barWidth/2 - 2)
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesLeave) + 15 ;} )
							.text(function(d){return d.NoOfEmployeesPresent;});		


			});
}