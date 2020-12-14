/* 	meme version 3: animated
	chantell jeffrey */

var x = 100
var y = 100
var s = 100
var xSpeed = 4
var ySpeed = 4 
var c = '#6B4400' 
var honeymoonLogo

function preload(){
	honeymoonLogo = loadImage('honeymoonlogo.jpg')}


function setup(){
	createCanvas(740, 460)
	noStroke()
	imageMode(CENTER)}

function draw(){
	background('#F79765')
	//image(honeymoonLogo, 65, -25, 500, 500)
	image(honeymoonLogo, x, y, 300, 300)
	fill(c)
	//ellipse(x, y, s)
	textSize(60)
	textAlign(CENTER,CENTER)
	textFont('Courier New');
	text("Honeymoon Studios", x,y,s)
	x+=xSpeed
	y+=ySpeed
	
	if(x > width || x < 0){
		xSpeed *= -1
		c = '#E06E51'}

	if(y > height || y < 0){
		ySpeed *= -1
		c = '#4F2600'}

		


}


