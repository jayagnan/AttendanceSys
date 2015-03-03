function drawBarChart(data){

			var width = 700, height = 600;
			var barWidth = 25;
			var chartWidth = 700, chartHeight = 400;
			var margin = {top: 20, right: 30, bottom: 30, left: 60},
					    width = width - margin.left - margin.right,
					    height = height - margin.top - margin.bottom;

			d3.select("svg").remove();		    
			var canvas = d3.select("#contents")
							.append("svg")
							.attr("class","chart")
							.attr("width", width + margin.left + margin.right)
						    .attr("height", height + margin.top + margin.bottom)
						  	.append("g")
						    	.attr("transform", "translate(" + margin.left + "," + (Number(margin.top) + 75) + ")");

							
			var yScale = d3.scale.linear()
							.range([chartHeight,0]);

			var yAxis = d3.svg.axis()
    						.scale(yScale)
    						.orient("left");				

			//d3.json("reportall.json",function(data){

			var xScale = d3.scale.ordinal()
							.rangeRoundBands([0,data.length*barWidth],.1)
							.domain(data.map(function(d){return d.dayOfDate;}))	

			var xAxis = d3.svg.axis()
    						.scale(xScale)
    						.orient("bottom");

			yScale.domain([0, d3.max(data,function(d){return (Number(d.NoOfEmployeesPresent)+Number(d.NoOfEmployeesAbsent)+Number(d.NoOfEmployeesLeave));})]);
			//xScale.domain([0, 12]);
			//console.log("YSCALE "+yScale);
			var bar = canvas.selectAll("g")
							.data(data)
							.enter()
								.append("g")
								.attr("transform",function(d,i){
									return "translate("+barWidth*i+",0)";
							 	});	

						canvas.append("g")
								.attr("class","y axis")
								.attr("transform","translate(-10,0)")
								.call(yAxis)
								.append("text")
								    .attr("transform", "rotate(-90)")
								    .attr("y", 6)
								    .attr("dy", "-3.71em")
								    .style("text-anchor", "end")
								    .text("Num of Employees")
								    .style("fill","steelblue")
								    .style("font","11px sans-serif");

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
								    .style("fill","steelblue")
								    .style("font","11px sans-serif");
							    			
				console.log("Yscale max "+yScale(Number(data[0].NoOfEmployeesPresent)+Number(data[0].NoOfEmployeesAbsent)+Number(data[0].NoOfEmployeesLeave)));
				
				console.log("Yscale second rect "+yScale(Number(data[0].NoOfEmployeesPresent)+Number(data[0].NoOfEmployeesAbsent)));
						bar.append("rect")
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesPresent);})
							.attr("width",barWidth-1)
							.attr("height",function(d){return chartHeight - yScale(d.NoOfEmployeesPresent);})
							.style("fill","steelblue");

						bar.append("text")
							.attr("x", barWidth/2 - 2)
							.attr("y",function(d){return /*chartHeight-*/yScale(d.NoOfEmployeesPresent) + 15 ;} )
							.text(function(d){return d.NoOfEmployeesPresent;});	

						bar.append("rect")
						//	.attr("x",barWidth)
						//	.attr("y",function(d){return /*chartHeight-*/(yScale(d.NoOfEmployeesPresent)-yScale(d.NoOfEmployeesAbsent));})
							.attr("y",function(d){return /*chartHeight-*/yScale(Number(d.NoOfEmployeesPresent)+Number(d.NoOfEmployeesAbsent));})
							.attr("width",barWidth-1)
							.attr("height",function(d){return chartHeight - yScale(d.NoOfEmployeesAbsent);})
							.style("fill","red");

						bar.append("text")
							.attr("x", barWidth/2 - 2)
							.attr("y",function(d){return /*chartHeight-*/yScale(Number(d.NoOfEmployeesPresent)+Number(d.NoOfEmployeesAbsent)) + 15 ;} )
							.text(function(d){return d.NoOfEmployeesAbsent === 0 ? "" : d.NoOfEmployeesAbsent ;});		

						bar.append("rect")
						//	.attr("x",barWidth*2)
							.attr("y",function(d){return /*chartHeight-*/yScale(Number(d.NoOfEmployeesPresent)+Number(d.NoOfEmployeesAbsent)+Number(d.NoOfEmployeesLeave));})
							.attr("width",barWidth-1)
							.attr("height",function(d){return chartHeight - yScale(d.NoOfEmployeesLeave);})
							.style("fill","orange");

						bar.append("text")
							.attr("x",barWidth/2 - 2)
							.attr("y",function(d){return /*chartHeight-*/yScale(Number(d.NoOfEmployeesPresent)+Number(d.NoOfEmployeesAbsent)+Number(d.NoOfEmployeesLeave)) + 15 ;} )
							.text(function(d){return d.NoOfEmployeesLeave === 0 ? "" : d.NoOfEmployeesLeave ;});		



						var legend =d3.select("svg").append("g")
										.attr("transform","translate(300,45)");

						var prelegend = legend.append("g").attr("class","prelegend").attr("transform","translate(0,0)");
						var abslegend = legend.append("g").attr("class","abslegend").attr("transform","translate(100,0)");
						var lvelegend = legend.append("g").attr("class","lvelegend").attr("transform","translate(200,0)");

						prelegend.append("rect")
								.attr("width",40)
								.attr("height",30)
								.attr("fill","#32CD32");
						prelegend.append("text")
								.attr("x",42)
								.attr("y",15)
								.attr("fill","steelblue")
								.text("- Present");

						abslegend.append("rect")
								.attr("width",40)
								.attr("height",30)
								.attr("fill","#FF0000");
						abslegend.append("text")
								.attr("x",42)
								.attr("y",15)
								.attr("fill","steelblue")
								.text("- Absent");

						lvelegend.append("rect")
								.attr("width",40)
								.attr("height",30)
								.attr("fill","#FF9900");
						lvelegend.append("text")
								.attr("x",42)
								.attr("y",15)
								.attr("fill","steelblue")
								.text("- Leave");

	//		});
}