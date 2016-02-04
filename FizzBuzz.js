
				// var i;
				// for ( i = 1; i <= 100; i++){
				// 	if (i%3 == 0 && i%5 ==0) {
				// 		document.getElementById("list").innerHTML += "FizzBuzz" + "<BR>";}
				// 	else if (i%3 == 0) {
				// 		document.getElementById("list").innerHTML += "Fizz" + "<BR>";}
				// 	else if (i%5 == 0) {
				// 		document.getElementById("list").innerHTML += "Buzz" + "<BR>";}
				// 	else {
				// 		document.getElementById("list").innerHTML += i + "<BR>";
				// 	}
				// }

				var i;			
				for (var i = 1; i<=20; i++){
        switch(true){
           case !(i%5 && i%3):
                document.getElementById("list").innerHTML += "FizzBuzz" + "<BR>";
                break; 
           case !(i%3):
                document.getElementById("list").innerHTML += "Fizz" + "<BR>";
                break;
            case !(i%5):
                document.getElementById("list").innerHTML += "Buzz" + "<BR>";
                break;
            default:
                document.getElementById("list").innerHTML += i + "<BR>";
                break;
        };


};