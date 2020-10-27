 /*
 meme version 1
 chantell Jeffrey 
 text & images 
 */

var title = 'Honeymoon Studios'
var description ='An animation company made to make everyone’s dreams come true. Here we aim to give the world more diverse stories for children by giving opportunities for those children to tell their stories. Our teams’ main goal is to give minority children a chance to see more people like them on their screens. To feel more connected to the characters that they will grow to love.n Inclusivity is very important to us and we strive to make that our mission in the animation industry.'



 function setup(){
 	createCanvas(740, 460)
 	/*canvas.drawingContext.miterLimit = 2;
 	used for stroke*/
 }



function draw(){
	background('#F79765');
	textSize(60);
	fill('#70442E');

//visualized alignment//
	/*strokeWeight(1);
	line(width/2, 0, width/2, height)
	line(0, height/2, width, height/2)*/
	

	textStyle(ITALIC)
	textFont('Courier New');
	textAlign(CENTER, TOP);
	text(title, width/2, height / 2 );

	var titleWidth = textWidth(title)

	textSize(12)
	textAlign(CENTER)
	fill('#3B2418')
	text(description, width/2 - titleWidth/2, height/2+75, titleWidth)
}