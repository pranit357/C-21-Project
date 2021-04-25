var canvas;
var music;
var box;
var edges;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);

    box = createSprite(random(20,630),100,20,20);
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=9;

    surface1 = createSprite(80,550,150,10);
    surface1.shapeColor="blue";

    surface2 = createSprite(240,550,150,10);
    surface2.shapeColor="orange";

    surface3 = createSprite(400,550,150,10);
    surface3.shapeColor="green";

    surface4 = createSprite(560,550,150,10);
    surface4.shapeColor="brown";
    
}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box)&&box.bounceOff(surface1))
    {
        box.shapeColor="blue";
        music.play();
    }

    if(surface2.isTouching(box))
    {
        box.shapeColor="orange";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    if(surface3.isTouching(box)&&box.bounceOff(surface3))
    {
        box.shapeColor="red";
    }

    if(surface4.isTouching(box)&&box.bounceOff(surface4))
    {
        box.shapeColor="green";
    }

    drawSprites();
    
}
