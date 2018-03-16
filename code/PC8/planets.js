

function Planets(x,y,diameter,color){

	this.x = 0;
	this.y = 0;
	this.diameter = 50;
	this.color = 255;
	this. theta = 0;

	this.display = function(){
		

		translate(width/2,height/2);
		noStroke();
		fill(255,232,124);
		ellipse(this.x,this.y,this.diameter);

	//mercury
	push();
		rotate(this.theta);
		translate(50,0);
		fill(200);
		ellipse(this.x,this.y, this.diameter/8);
	pop();

	//venus 
	push();
		rotate(-this.theta);
		translate(70,0);
		fill(255,150,51);
		ellipse(this.x,this.y, this.diameter/6);
	pop();

	//earth 
	push();
		rotate(this.theta* .5);
		translate(110,0);
		fill(48,103,84);
		ellipse(this.x,this.y, this.diameter/5);
		//moon
			rotate(-this.theta * 1.9);
			translate(20,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
	pop();

	//mars 
	push();
		rotate(-this.theta* .7);
		translate(140,0);
		fill(140,0,26);
		ellipse(this.x,this.y, this.diameter/7);
		//phobos
		push();
			rotate(-this.theta * 1.9);
			translate(10,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
		pop();
		//deimos
			rotate(this.theta * 1.9);
			translate(20,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
		pop();
	

	//jupiter brown
	push();
		rotate(-this.theta* .9);
		translate(175,0); 
		fill(255,229,180);
		ellipse(this.x,this.y, this.diameter/1.5);
		//ganymede
		push();
			rotate(-this.theta * 1.3);
			translate(20,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/15);
		pop();
		//callisto
		push();
			rotate(this.theta * 1.7);
			translate(25,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
		pop();
		//lo
		push();
			rotate(this.theta * 1.9);
			translate(30,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/11);
		pop();
		//europa
			rotate(-this.theta * 1.9);
			translate(35,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
	pop();

	//saturn light grey 
	push();
		rotate(-this.theta);
		translate(210,0);
		fill(150);
		ellipse(this.x,this.y, this.diameter/2);
		stroke(255);
		noFill();
		ellipse(this.x,this.y, this.diameter/1.2)
		//titan
			rotate(-this.theta * 1.9);
			translate(20,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
	pop();

	//unanus light blue 
	push();
		rotate(this.theta* .7);
		translate(250,0);
		fill(195,253,184);
		ellipse(this.x,this.y, this.diameter/3);
		//ariel
		push();
			rotate(-this.theta * 1.3);
			translate(20,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/15);
		pop();
		//umbriel
		push();
			rotate(this.theta * 1.7);
			translate(25,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
		pop();
		//titiana 
		push();
			rotate(this.theta * 1.9);
			translate(30,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/11);
		pop();
		//oberon
			rotate(-this.theta * 1.9);
			translate(35,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
	pop();

	//neptune dark blue/purple 
	push();
		rotate(this.theta* .10);
		translate(280,0);
		fill(50,0,128);
		ellipse(this.x,this.y, this.diameter/4);
		//triton
			rotate(-this.theta * 1.9);
			translate(20,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/10);
	pop();

	//pluto purple 
	push();
		rotate(this.theta* .6);
		translate(300,0);
		fill(255,45,126);
		ellipse(this.x,this.y, this.diameter/10);
		//charon
			rotate(-this.theta * 1.9);
			translate(10,0);
			fill(225);
			ellipse(this.x,this.y, this.diameter/15);
	pop();

		this.theta = this.theta + .5;
	};

}




//Push > translate > pop  over and over 

//rotate(the angle of rotaion(always around the origin))

//with in draw under bg rotate (radian(frameCount));


// if (frameCount % 25 == 0 ){ >>> modulo every time the frame count is devided by 25 = 0 

	// 18 modulo 4 = 4 remader 2 gives you 2 

// create a for loop to put the dots in and change there arguments 










