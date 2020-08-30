    var script = document.createElement('script');script.src = "@{https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js}";document.getElementsByTagName('head')[0].appendChild(script); 
    $(document).ready(function(){
    	$.ajax({
    		url: "http://localhost:8090/valuations", //http://localhost/projo copy/
    		method: "GET",
    		success: function(data) {
    			console.log(data);
    			var Valuationstatus = [];
    			var Policiesno = [];

                

    			for(var i in data) {
    				Valuationstatus.push(data[i].valuationstatus + " Choice");
    				Policiesno.push(data[i].policiesno);
 	}

    			var chartdata = {
    				labels: Valuationstatus,
    				datasets : [
    					{
    						label: 'Choice',
    						backgroundColor: ["#F7464A", "#46BFBD"],
    						borderColor: 'rgba(200, 200, 200, 0.75)',
    						hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"],
    						hoverBorderColor: 'rgba(200, 200, 200, 1)',
    						fill: false,
    						data: Policiesno
    					},

    				]
    			};

    			var ctx = $("#pieChart4");

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