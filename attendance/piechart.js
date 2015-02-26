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


//			});//end d3json


}