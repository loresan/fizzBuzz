$(document).ready(function() {
 
 for (var NumberCount = 1; NumberCount <= 100; NumberCount++) {
 	if(NumberCount % 3 == 0  && NumberCount % 5 == 0){
 		document.write("<p>FizzBuzz</p>");
 	
 	}
 	else if(NumberCount % 3 == 0){
 		document.write("<p>Fizz</p>")
 	}

 	else if(NumberCount % 5 == 0){
 		document.write("<p> Buzz</p>")
 	}
 	
 	else{document.write("<p>"+NumberCount+"</p>");}
 };
});