//Create variables here
 
var dog, happyDog, database
var foodS, foodStock, d, hd
 
function preload()
{
 d=loadImage("images/dogImg.png");
 hd=loadImage("images/dogImg1.png");
 //load images here
}
 
function setup() {
 createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250, 250, 150, 150);
 dog.addImage(d);
 dog.scale=0.15;
 
 foodStock=database.ref("Food");
 foodStock.on("value", readStock);
 
}
 
 
function draw() { 
 
 background(46,139,87);
 
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(hd);
 
 }
 drawSprites();
 //add styles here
 
 textSize(30);
 fill("white");
 stroke("black");
 text("Food remaining: "+ foodS, 170,200)
 text("Press up-arrow key to feed Drago milk!", 250, 350);
 
}
 
 
 
function readStock(data){
 foodS=data.val();
 
}
 
function writeStock(x){
  if(x<=0){
   x = 0;
 }
 else {
   x = x-1;
 }
 
 database.ref("/").update({
   Food:x
 })
}

