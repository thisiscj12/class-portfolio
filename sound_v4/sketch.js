//sound version 4: custom functions//

var dingSound
var dingSound2
var dingSound3
var bgMusic;  

function preload(){
	dingSound = loadSound('ding_1.wav')
	dingSound2 = loadSound('ding_2.wav')
	dingSound3 = loadSound('ding_3.wav')
	bgMusic = loadSound('backgroundmusic.mp3')
}





function setup(){createCanvas(740, 460)}

function draw(){background('#F79765')
				
				button(100, 230, 100, dingSound)
				button(370, 75, 100, dingSound2)
				button(640, 230, 100, dingSound3)
				button(370, 230, 100, dingSound)
				button(370, 385, 100, dingSound2)
				var x = 100
				var y = 230
				var s = 100}
				
				

function button(x, y, s, sound){var d = dist(x, y, mouseX, mouseY)
								if(d<s/2){fill('#944C0F')
									if(mouseIsPressed && !sound.isPlaying())
										{sound.play()}}
								else{fill('#FFC800')}
								noStroke()
								 ellipse(x, y, s)
}











 
