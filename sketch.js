var database;

var gameState = 0;

var form, player, game;

var playerCount = 0;

var allPlayers;

var distance = 0;

var car1, car2, car3, car4, cars;
var track,car1Image,car2Image,car3Image,car4Image;
var xVel, yVel;
function preload(){
track = loadImage("track.jpg");
car1Image = loadImage("car1.png");
car2Image = loadImage("car2.png");
car3Image = loadImage("car3.png");
car4Image = loadImage("car4.png");

f2 = loadImage("f1.png");
ground = loadImage("ground.png");
bronze = loadImage("bronze.png");
silver = loadimage("Silver.png");
gold = loadImage("gold.png");


}

function setup(){
    database = firebase.database();

    createCanvas(displayWidth-20,displayHeight-30); 

    xVel = 0;
    yVel = 0;
    
    game  = new Game();
    game.getState();
    game.start();
    obstacles = createGroup();

    for(var i = 0; i < 5; i++){
        w = random(200,950);
        h = random(-height*4,height-400);
        f1.createSprite();
        f1.addImage(f2);
        obstacle.add(f1);
    }
   
}

function draw(){
    //background("white");
    if(playerCount === 4){
        game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }

    if(gameState===2){
        game.end();
    }
}

