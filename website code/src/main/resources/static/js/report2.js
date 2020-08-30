    var script = document.createElement('script');script.src = "@{https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js}";document.getElementsByTagName('head')[0].appendChild(script); 
    $(document).ready(function(){
    	$.ajax({
    		url: "http://localhost:8090/type", //http://localhost/projo copy/
    		method: "GET",
    		success: function(data) {
    			console.log(data);
    			var Type = [];
    			var Insuredno = [];

                // var month = [];

    			for(var i in data) {
    				Type.push(data[i].type + " Insurance");
    				Insuredno.push(data[i].insuredno);
 	}

    			var chartdata = {
    				labels: Type,
    				datasets : [
    					{
    						label: 'Type',
    						backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
    						borderColor: 'rgba(200, 200, 200, 0.75)',
    						hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"],
    						hoverBorderColor: 'rgba(200, 200, 200, 1)',
    						fill: false,
    						data: Insuredno
    					},

    				]
    			};

    			var ctx = $("#pieChart3");

    			var barGraph = new Chart(ctx, {
    				type: 'pie',
    				data: chartdata,    
    				
    			});
    			
    		},
    		
    		error: function(data) {
    			console.log(data);
    		}
    	});
    });  