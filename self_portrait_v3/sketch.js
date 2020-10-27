 /*self portrait v2 by chantell jeffrey*/

//global scope//

//variables
var x = 350; 
var y = 175;
var eyeSize = 250
var irisSize = 150

//functions
function setup(){
createCanvas(740,460);/*width and height 
variables always reference these numbers*/

}



function draw() {
	background('#7D5519')

	//eyes//
	fill('0');//white
	strokeWeight(10);
	stroke(0);
	circle(x - 150, y, eyeSize);//left eye//
	circle(x + 150, y, eyeSize);//right eye//
	fill('#2B0F05')//dark brown
	noStroke();
	circle(x - mouseX, mouseY, irisSize);//left iris//
	circle(x + mouseX, mouseY, irisSize);//right iris//
	//cheeks//
	fill('#AD6661')
	ellipse(x - 250, y + 200, 150, 100)//left cheek
	ellipse(x + 250, y + 200, 150, 100)//right cheek
	//nose// 
	fill('#C47964');//nude color
	stroke('black');
	ellipse(x, y + 215, 250, 100);

//visualized origin//
	//stroke("pink")
	//circle(x, y, 10)
}




















