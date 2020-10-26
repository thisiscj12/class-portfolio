/*
	self portrait v1
	by chantell jeffrey

*/
function setup() {createCanvas(740,460);}

function draw() {
	background('#7D5519')
	//eyes//
	fill('0');//white
	strokeWeight(10);
	stroke(0);
	circle(200, 175, 250);//right frame//
	circle(500, 175, 250);//left frame//
	fill('#2B0F05')//dark brown
	noStroke();
	circle(200, 175, 150);//right iris//
	circle(500, 175, 150);//left iris//
	//cheeks//
	fill('#AD6661')
	ellipse(100, 375, 150, 100)//right cheek
	ellipse(600, 375, 150, 100)//left cheek
	//nose// 
	fill('#C47964');//skin color
	stroke('black');
	ellipse(350, 390, 250, 100);

	
}