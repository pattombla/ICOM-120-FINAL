let posX, posY;
let colors = ['blue','red','purple','orange','white']
let b1, b2;

function setup() {
  createCanvas(600, 600);
  
  posX = random(0,300);
  posY = random(0,300);
  b1 = new Ball(posX,posY); 
  
}

function draw() {
  background(colors[2]);
  
  b1.circleDraw(colors[3]);
  
  let y = 0
  while(y < height){
    circle(posX,y+300,20);
    y=y+50;
    fill (colors[1]);
  
    
    if (mouseX>300){
      fill(colors[4]);
    }
  }
  
  circle(posX,posY,100);
  circle(posX+100,posY+100,50);
  mySignature();
  
}

function mySignature(){
  
  textSize(20);
  strokeWeight(4);
  fill('white');
  text('Pat Blaine',width-125,height-30);
}