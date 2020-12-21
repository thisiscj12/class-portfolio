// pattern version 1

function setup(){createCanvas(800,600);
				pattern();
				}

function mousePressed(){
	pattern()
}

function pattern() {
	background('#2B28FC')
	let w = random (50, 150)
	let h = 50
	for(let x = 0; x <= width; x+=w){
		for(let y = 0; y<= height; y +=h){
			let r = random(255)
			let g = random(255)
			let b = random(255)
			stroke(r,g,b)
			strokeWeight(20)
			noFill()
			ellipse(x,y,w,h)
			
	}
		
	}

	
}

