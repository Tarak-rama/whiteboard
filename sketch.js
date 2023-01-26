let radio;
let penUp;
let penDown;
let colours;
let eraser;
let penTool;
let pen;
let para;
let cnv;
let saveImg;
function setup() {
  cnv=createCanvas(windowWidth, windowHeight);
  cnv.position(120,10);
  cnv.style('border','5px solid gray')
 
  
  background(255);
  
  //Colour Buttons
  radio = createRadio();
  radio.option('Black');
  radio.option('Gray');
   
  radio.option('Yellow');
  radio.option('Gold');
  
  radio.option('Green');
  
  radio.option('Blue');
   
  radio.option('Orange');
  
  radio.option('Brown'); 
  radio.option('Indigo');
  radio.option('Purple');
  radio.option('Pink');
   
  radio.option('Red');
  
  
  radio.style('height', '420px');
  radio.style('width', '66px');
  radio.style('padding', '10px');
  radio.style('color', 'rgb(0,0,0)');
  radio.style('font-size', '15px');
  radio.style('border', '2px solid white');
  radio.position(20, 10);

  penUp= true;
  penDown= false;
  
  //Eraser Tool slider ,styling and heading
  eraser=createSlider(0,100,0);
  eraser.style('width', '90px');
  eraser.position(15, 480);

  para=createP('Eraser');
  
  para.position(40,450);
  para.style('color','#FF7700');
  
  //Writing Tool slider ,styling and heading
  penTool=createSlider(2,50,0);
  penTool.style('width', '90px');
  
  penTool.position(15, 560);
 
  para=createP('PenThickness');
  para.position(20,520)
  para.style('color','#6D0080')
}

function draw() {
  colours = radio.value();
  pen = penTool.value();
  eraserTool()
  
  colorMode(RGB);
        fill('red');
	stroke(0);
	rect(0, 0, width, 70);
  
  colorMode(RGB);
        fill('yellow');
	stroke(0);
  textSize(20)
   text(' -By TARAK', 400, 30);
  
  
  colorMode(RGB);
        fill('white');
	stroke(0);
  textSize(18)
  text(' write anything you want ', 420, 50);
  
	
 
  colorMode(RGB);
        fill('black');
	stroke(0);
  textSize(40)
  text(' Whiteboard App', 5 , 35);
  
}
//Writing Tool
function mouseDragged(){
  penDown=true;
  stroke(colours)
  strokeWeight(pen)
  line(mouseX,mouseY,pmouseX,pmouseY)
}

function mouseReleased(){
  penUp=true;
  noStroke();
}

//Eraser Tool
function eraserTool(){
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,eraser.value(),eraser.value())
  
  
}
