// interaction 2 - collisions
var v, m, a
var dingSound2 

function preload(){dingSound2 = loadSound('ding_2.wav')}

function setup(){createCanvas(740, 460)}

function mousePressed(){var d = dist(350, 100, mouseX, mouseY)
						if(d<75)
							{{dingSound2.play()}}
						if(mouseX > 220 && mouseX < 520 && 
							mouseY > 250 && mouseY <350) 
								{dingSound2.play()}}

function draw(){background('#F79765')
				//circle button
				fill('#FFC800')
				var d = dist(350, 100, mouseX, mouseY)
				if(d<75)
					{fill('#784225')
					v = random(255)
					m = random(255)
					a = random(255)}
				circle(370, 100, 150)
				//rect button
				fill('#FFC800')
					if (mouseX > 220 && mouseX < 520 && mouseY > 250 && mouseY <350) 
					{fill('#784225')}
				rect(220, 250, 300, 100)}