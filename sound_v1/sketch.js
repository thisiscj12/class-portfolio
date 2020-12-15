/* sound sampler v1
chantell jeffrey */

var dingSound
var bgMusic; 
var honeymoonLogo;
var honeymoonLogo2

function preload(){
	honeymoonLogo = loadImage('honeymoonlogo.jpg')
	honeymoonLogo2 = loadImage('honeymoonlogo2.jpg')
	dingSound = loadSound('ding_2.wav')
	bgMusic = loadSound('backgroundmusic.mp3')
}

function setup(){
	createCanvas(740, 460)
}

function draw(){ 
	background('#F79765')
	image(honeymoonLogo, width/2-150, height/2-150, 300, 300)
	if (bgMusic.isPlaying()){
		background('#AB5E35')
		image(honeymoonLogo2, width/2-150, height/2-150, 300, 300)
	}

	var currentTime = bgMusic.currentTime();
	var duration = bgMusic.duration()
	var timeElapsed = map(currentTime, 0, duration, 0, width);
	fill('#FFC800')
	noStroke();
	rect(0, height - 100, timeElapsed, 100)
	//change volume
	var vol = map(mouseY, 0, height, 1, 0)
	bgMusic.setVolume(vol)
	fill('#C27932')
	rect(0, mouseY, width, height)
}

function mousePressed(){
	if (bgMusic.isPlaying()) {
		bgMusic.pause()
	}
	else{
		bgMusic.play()
	}
}















