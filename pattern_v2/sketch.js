// pattern version 1

function setup(){createCanvas(740,460);
				rectMode(CENTER)
				pattern();}
function mousePressed(){
		pattern()
}

function pattern() {
	background('#2B28FC')
	//snow
	for(let x = 0; x < width; x+=100){
	noStroke()
	fill('white')
	ellipse(x, height, 300, height)}
//trees
	for(let x = 0; x < 800; x+=150){
		fill('#522709')
		rect(x, height/1.75, 20, 200)
		let y = random(100,230)
		let g = random (128)
		fill(0, g, 0)
		ellipse(x, y, 150)
	}
	//snow
	for(let x = 0; x<width; x+= random(50,100)){
		fill('white')
		ellipse(x, 25, 10)
		ellipse(x + 10, 50, 10)
		ellipse(x - 10, 75, 10)
		ellipse(x + 10, 100, 10)
		ellipse(x + 10, 125, 10)
		ellipse(x - 10, 150, 10)
		ellipse(x + 10, 175, 10)
	}
}

