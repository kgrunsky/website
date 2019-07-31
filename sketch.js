

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(150,150,0);
	fill(200);
	stroke(50,100,200);
	strokeWeight(50);
	
	
}

function draw(){
	background(20,0,244);
	for(i=0;i<10;i++){
		line(mouseX,mouseY,20*i,110*i);
	}
}


function mousePressed(){
	fill(random(0,255),random(0,255),random(0,255));	
}
