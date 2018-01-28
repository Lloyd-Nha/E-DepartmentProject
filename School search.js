
function SearchFunction(){
	var searchNumber = getElementById("Search_Number").value;
    var infoDisplay = getElementById("result_info").
    var sentence ="";
	
	for (var i=0; i<result.length; i++){
      if (result[i].centre_no == searchNumber){
	      sentence+="<p>"+ "Then number of students who wrote in 2016 is " 
	       +result[i].wrote_2016 + " Student passed " 
	             +result[i].passed_2016 "</p>";
	     }
	
	}
	
	//alert("No such center");
  infoDisplay.insertAdjacentHTML('beforeend', sentence)
}