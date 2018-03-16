//Fiona Slater

var planets = [];
var starsArray2 =[];


function setup() {
	createCanvas(600,600);
	ellipseMode(CENTER);
	angleMode(DEGREES);

	for (var i = 0; i < 1000; i++) {
	  	starsArray2[i] = new Stars2();	
	}

	for (var j = 0; j < 1; j++){
		planets[j] = new Planets;
		
	}
}


function draw() {
	background(0);


//stars 
 	for (var i = 0; i < starsArray2.length; i++){

	 		var col = random(0,1);
	 		if (col < 0.5){
	 			fill(0);
	 		} if (col >= 0.5){
	 			fill(255);
	 		}
 		starsArray2[i].display();
 	}

//planets/sun
	for (var j = 0; j < 1; j++){
		planets[j].display();
		
	}
 	

}//end of draw








