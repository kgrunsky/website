var imgs = [];
var n;

function preload(){
	for(i=0;i<3;i++){
	imgs[i] = loadImage('assets/img'+i+'.jpg');
	
	}
	
}
function setup(){
	print('preload completed');
	createCanvas(800,600);
	
}
function draw(){
	for(q=0;q<imgs.length;q++){
	image(imgs[q],0,q*100,200,100);
	}
	
}


//function name(arguments){
//code
//}