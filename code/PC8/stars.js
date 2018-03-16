

function Stars2(){
	
	this.x = random(width);
	this.y = random(height);
	this.speedX = random (-1,-1.5);
	this.speedY = random (-1,-1.5);
	this.diameter = random(1,2);

	this.display = function() {
		
		noStroke();
		ellipse(this.x,this.y,this.diameter,this.diameter);

	}
	
}
