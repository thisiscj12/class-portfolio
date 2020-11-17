/* logo version 2
conditional logic(making decisions with code)
 */

var honeymoonLogo,honeymoonLogo2

function preload(){
	honeymoonLogo = loadImage("honeymoonlogo.jpg")
	honeymoonLogo2 = loadImage("honeymoonlogo2.jpg")
}


function setup(){
	createCanvas(740,740)
	textAlign(CENTER, CENTER)
	textFont('Courier New')
	textSize(40)

}

function draw(){
	background('#F79765')
	if (mouseIsPressed){
		image(honeymoonLogo2, 65, 15, 500, 500)
		text('where your dreams come true!', width/2, height/2 + 150)
	
	}
	else {
		image(honeymoonLogo, 65, 15, 500, 500)
		text('Honeymoon Studios', width/2, height/2 + 150)
	
	}



} 
	 