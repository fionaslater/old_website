//Fiona Slater



var starsArray2 =[];
var myInterval;
var colorful = false;
var c = color(0,0,0);


function setup() {
	createCanvas(windowWidth, windowHeight);

	for (var i = 0; i < 100; i++) {
	  	starsArray2[i] = new Stars2();
	  	
	}
	  
}


function draw() {
	background(0);

	
 	for (var i = 0; i < starsArray2.length; i++){
 		starsArray2[i].move();

 		var col = random(0,1);

 		if (colorful) {
 			if (col < 0.5){
 				fill(0);
 				// }if(col > 0.5){
 				// 	fill(255);
 			} else if (col >= 0.5){
 				//changeColor();
 				fill(c);
 			}
 			
 		} else {
 			//flashing on, off, white, black 
 			
 			if (col < 0.5){
 				fill(0);
 				// }if(col > 0.5){
 				// 	fill(255);
 			} else if (col >= 0.5){
 				//changeColor();
 				fill(255);
 			}
 		}

 		starsArray2[i].display();
 	}
 	//creates multiple at once
 	starsArray2[i] = new Stars2();
 	starsArray2[i+1] = new Stars2();
 	starsArray2[i+2] = new Stars2();
 	starsArray2[i+3] = new Stars2();
 	starsArray2[i+4] = new Stars2();

 	if (starsArray2.length > 3000){
 		starsArray2.splice(0,3);
 	}

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed(){
 		colorful = !colorful;
 		c = color(random(255),random(255),random(255),255);
 	}






