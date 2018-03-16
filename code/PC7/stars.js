

function Stars2(){
	
	this.x = mouseX;
	this.y = mouseY;
	this.speedX = random (-1,-1.5);
	this.speedY = random (-1,-1.5);
	this.diameter = 2;

	this.display = function() {
		
		noStroke();
		ellipse(this.x,this.y,this.diameter,this.diameter);

		if(this.x >= width|| this.x <= 0 || this.y <= 0){
			this.speedX = -this.speedX;
			this.speedY = -this.speedY;
		}else if (this.y == random(450,500)){
			this.speedX = 0;
			this.speedY = 0;

		}
	}


	this.move = function() {
		this.y += this.speedY,this.speedX;
	
	}

	// this.clicked = function (i){
	// 	var d = dist(mouseX, mouseY, this.x, this.y);
	// 	if (d < 15){
		
	// 	}
	// }

	

	
}
