function drawPieChart(data){

//			d3.json("piedata.json",function(data){

				var width = 600, height = 600;
	
				d3.select("svg").remove();
				var canvas = d3.select("#contents")
								.append("svg")
								.attr("width",width)
								.attr("height",height);
				
				var chart = canvas.append("g")
									 .attr("transform","translate(350,275)");

				var color = d3.scale.ordinal()
									.range(["red","orange","#32CD32"])
									.domain(0,data.length);

				var outerRadius = 200;
				var arc = d3.svg.arc()
								.innerRadius(20)
								.outerRadius(outerRadius);

				var pieLayout = d3.layout.pie()
									.value(function(d){return d.NoOfEmployees;});

				var arcs = chart.selectAll(".arc")
								 .data(pieLayout(data))
								 .enter()
								 	.append("g")
								 	.attr("class","arc");

					arcs.append("path")
						.attr("d",arc)
						.attr("fill",function(d){return color(d.data.Type);});	

					arcs.append("text")
						.attr("transform",function(d){return "translate("+arc.centroid(d)+")";})	
						.text(function(d){return d.value;})			

				var legend =chart.append("g")
										.attr("transform","translate(-100,-250)");

						var prelegend = legend.append("g").attr("transform","translate(0,0)");
						var abslegend = legend.append("g").attr("transform","translate(100,0)");
						var lvelegend = legend.append("g").attr("transform","translate(200,0)");
						var noinflegend = legend.append("g").attr("transform","translate(300,0)");

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

							


//			});//end d3json


}