function drawPieChart(){

	var width = 600, height = 100;


	d3.json("",function(data){
	
		d3.select("svg").remove();
		var canvas = d3.select("#contents")
						.append("svg")
						.width(width)
						.height(height);
		
		var chart = canvas.append("g")
							 .attr("transform","translate(100,100)");

		var outerRadius = 100;
		var arc = d3.svg.arc()
						.innerRadius(20)
						.outerRadius(outerRadius);

		var pieLayout = d3.layout.pie()
							.value(function(d){return d;});

		var arcs = chart.selectAll(".arc")
						 .data(pieLayout(data))
						 .enter()
						 	.append("g")
						 	.attr("class","arc");

			arcs.append("path")
				.attr("d",arc);					


	});//end d3json


}