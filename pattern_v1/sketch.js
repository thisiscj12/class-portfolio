// pattern version 1

function setup(){createCanvas(740,460);
				rectMode(CENTER )}

function draw() {
	background('#2B28FC')
//snow
	for(let x = 0; x < width; x+=100){
	noStroke()
	fill('white')
	ellipse(x, height, 300, height)}
//trees
	for(let x = 0; x < 800; x+=150){
		fill('#522709')
		rect(x, height/1.5, 20, 200)

		fill('green')
		ellipse(x, height / 2, 150)
	}

//snow
	for(let x = 0; x<width; x+=100){
		fill('white')
		ellipse(x, 25, 10)
		ellipse(x + 10, 50, 10)
		ellipse(x - 10, 75, 10)
		ellipse(x + 10, 100, 10)
		ellipse(x + 10, 125, 10)
		ellipse(x - 10, 150, 10)
		ellipse(x + 10, 175, 10)
	}

for(let x = 0; x<width; x+=50){
		fill('white')
		ellipse(x, 25, 10)
		ellipse(x + 10, 50, 10)
		ellipse(x - 10, 75, 10)
		ellipse(x + 10, 100, 10)
		ellipse(x + 10, 125, 10)
		ellipse(x - 10, 150, 10)
		ellipse(x + 10, 175, 10)
		ellipse(x + 10, 200, 10)
		ellipse(x - 10, 225, 10)
		ellipse(x + 10, 250, 10)
	}



}

