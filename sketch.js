//to createSprites and assign values.
var SunImg,merImg,venusImg,earthImg,marsImg;
var SunSpr,merSpr,venusSpr,earthSpr,marsImg;
var SunX=650, SunY=300;
var  MerRadius=100,venusRad = 150,earthRad = 220,marsRad = 270;
let scaleValue = 0.2,angleE = 0,angle=0,angleM=0,angleMa = 0,incrementE = 1.5, increment=2,incrementM = 4,incrementMa = 1;
let Count=0;

function preload() {

  //to add images to the planet sprites.
  SunImg = loadImage('images/Sun.png');
  merImg = loadImage('images/mercury.png');
  venusImg  = loadImage('images/venus.png');
  earthImg = loadImage('images/earth.png');
  marsImg = loadImage('images/mars.png');
}

function setup() {

  //to create the canvas.
  createCanvas(1350,1350);

  //to create the sun andd set properties
  SunSpr = createSprite(650,300,0,0);
  SunSpr.addImage(SunImg);
  SunSpr.debug = true;
  SunSpr.setCollider("circle",0,0);

  //to create mercury and set properties.
  merSpr = createSprite(SunX,SunY,0,0);
  merSpr.addImage(merImg);
  merSpr.scale = 0.1;
  merSpr.debug = true;
  merSpr.setCollider("circle",0,0);

  //to create venus and set properties
  venusSpr = createSprite(SunX,SunY,0,0);
  venusSpr.addImage(venusImg);
  venusSpr.scale = 0.4;
  venusSpr.debug = true;
  venusSpr.setCollider("circle",0,0);

  //to create earth and set properties.
  earthSpr = createSprite(SunX,SunY,0,0);
  earthSpr.addImage(earthImg);
  earthSpr.scale = 0.4;
  earthSpr.debug = true;
  earthSpr.setCollider("circle",0,0);

  //to create mars and set properties.
  marsSpr = createSprite(SunX,SunY,0,0);
  marsSpr.addImage(marsImg);
  marsSpr.scale = 0.35;
  marsSpr.debug = true;
  marsSpr.setCollider("circle",0,0);

  //to assign frameRate.
  frameRate(20);
}

function draw() {

  //background color.
  background("#000000"); 

   //to set timer for increment of sun.
   Count=Count+1;

   SunSpr.scale = scaleValue;

   //to increase the size of sun after 150 counts.
 if(Count > 150){scaleValue = scaleValue + 0.005;}

 //to set revolution and increment value for revolution for planets.
 angle=angle+increment;
 angleM=angleM+incrementM;
 angleE=angleE+incrementE;
 angleMa=angleMa+incrementMa;
 
 //to assign the x and y coordinatesfor planets.
 merSpr.x=SunX+MerRadius*Math.cos(angleM * Math.PI/180);
 merSpr.y=SunY+MerRadius*Math.sin(angleM * Math.PI/180);

 venusSpr.x = SunX+venusRad*Math.cos(angle*Math.PI/180);
 venusSpr.y = SunY+venusRad*Math.sin(angle*Math.PI/180);

 earthSpr.x = SunX+earthRad*Math.cos(angleE*Math.PI/180);
 earthSpr.y = SunY+earthRad*Math.sin(angleE*Math.PI/180);

 marsSpr.x=SunX+marsRad*Math.cos(angleMa*Math.PI/180);
 marsSpr.y=SunY+marsRad*Math.sin(angleMa*Math.PI/180);

//to destroy the planets when the sun touches them.
if(SunSpr.collide(merSpr)){
  merSpr.remove();
}

if(SunSpr.collide(venusSpr)){
  venusSpr.remove();
}

if(SunSpr.collide(earthSpr)){
  earthSpr.remove();
}

if(SunSpr.collide(marsSpr)){
  marsSpr.remove();
}

 drawSprites();
}
