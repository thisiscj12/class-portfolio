// pattern version 1

function setup(){createCanvas(800,600);
				}

function draw() {
	background('#2B28FC')
	let w = 150
	let h = 50
	for(let x = 0; x <= width; x+=w){
		for(let y = 0; y<= height; y +=h){
			noStroke()
			fill('#A535FC')
			ellipse(x,y,w,h)
			
	}
		
	}

	
}

