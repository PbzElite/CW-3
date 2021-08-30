var database;
var menu,player;
var team1Count, team2Count;
var gameState=0;
var measure1,measure2;

function setup(){
  createCanvas(1280,720);
  database = firebase.database();

  menu = new Menu();

  //measure1 = createSprite(640,360);

}

function draw() {

  background("black");

  if(gameState===0){
    menu.display(); 
    player = new Player();
    player.getTeam1Count();
    player.getTeam2Count();
}

  console.log("team1 "+team1Count);
  console.log('team2 '+ team2Count);
  //drawSprites();    

}