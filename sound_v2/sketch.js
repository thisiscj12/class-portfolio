/* sound sampler v2
chantell jeffrey */

var dingSound
var dingSound2
var dingSound3
var bgMusic; 
var honeymoonLogo;
var honeymoonLogo2

function preload(){
	honeymoonLogo = loadImage('honeymoonlogo.jpg')
	honeymoonLogo2 = loadImage('honeymoonlogo2.jpg')
	dingSound = loadSound('ding_1.wav')
	dingSound2 = loadSound('ding_2.wav')
	dingSound3 = loadSound('ding_3.wav')
	bgMusic = loadSound('backgroundmusic.mp3')
}

function setup(){
	createCanvas(740, 460)

}

function draw(){ 
	background('#F79765')
	//image(honeymoonLogo, width/2-150, height/2-150, 300, 300)
		if(keyIsPressed){
		if(key == 'p'){
			background('#AB5E35')
			dingSound.play()
		}
		if(key == 's'){
			background('#FFC800')
			dingSound3.play()
		}
		//enter key 13//
		//space key 32//
		if(keyCode == 32){
			image(honeymoonLogo, width/2-250, height/2-250, 500, 500)
			dingSound2.play()}
		}
	

	/*textSize(60)
	text(keyIsPressed, 20, 50)*/
}


