/* final project pitch 
*/

/*
	final project pitch template
	title
	description
	theme
	interaction
	grapics
*/

var currentSlide = 1;
var totalSlides = 5;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 50;

var backBtnX = 20;
var backBtnY = nextBtnY;

var btnW = 100;
var btnH = 30;

function setup() {
	createCanvas(960, 640);
}

function draw() {
	background('#F79765');
	noStroke();
	
	// slides
	if (currentSlide == 1) {
		// title
		textFont('Courier New')
		textSize(80);
		fill('black');
		textAlign(CENTER, CENTER);

		// fill in your own title
		text('Winter Night', width/2, height/2 - 50);
		textSize(60);
		text('in Nature', width/2, height/2 + 50);
	
	} else if (currentSlide == 2) {
		// description, theme
		textAlign(LEFT);
		fill('black');
		textSize(50);
		text('My project is a generative pattern in space that uses P5 shapes and randomness to create trees and snowfall', 50, 100, width - 100);

	} else if (currentSlide == 3) {
		// describe the interaction
		textAlign(LEFT);
		fill('black');
		textSize(50);
		text('User will generate new patterns by using their mouse to click on the canvas.', 50, 100, width - 100);
	} else if (currentSlide == 4) {
		// describe the graphics
		textAlign(LEFT);
		fill('black');
		textSize(50);
		text('The graphics include circles.', 50, 100, width - 100);
		fill('yellow')
		circle(width/2, height/2, 200);
	} else if (currentSlide == 5) {
		// describe the graphics
		textAlign(LEFT);
		fill('black');
		textSize(50);
		text('The graphics rectangles', 50, 100, width - 100);
		fill('yellow')
		rect(width/2, height/2, 200, 400);
	}

	// draw buttons
	if (currentSlide < totalSlides) {
		button(nextBtnX, nextBtnY, "Next");
	}

	if (currentSlide > 1) {
		button(backBtnX, backBtnY, "Back");
	}
	
}

// displaying button
function button(x, y, displayText) {

	// draw buttons
	stroke('plum');
	fill(255);
	
	if (mouseX > x && mouseX < x + btnW &&
		mouseY > y && mouseY < y + btnH) {
		fill('yellow');

		if (mouseIsPressed) {
			stroke('yellow');
		}
	}
	
	strokeWeight(4);
	rect(x, y, btnW, btnH, 10);

	noStroke();
	fill('#1C8EFC');
	textSize(25);
	textAlign(CENTER, CENTER);
	text(displayText, x, y, btnW, btnH);

}

function mousePressed() {
	// over the next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW &&
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	// over the back button
	if (mouseX > backBtnX && mouseX < backBtnX + btnW &&
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}

function keyPressed() {
	if (keyCode == 39) { // right arrow
		if (currentSlide < totalSlides) {
			currentSlide++;
		}
	}

	if (keyCode == 37) { // left arrow
		if (currentSlide > 1) {
			currentSlide--;
		}
	}
}
