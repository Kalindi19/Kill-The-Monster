const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero,rope,ground,monster;
var Bg;

function preload(){
    Bg=loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(1000,790,2000,20);

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);

    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11= new Box(800,100,70,70);
    box12= new Box(800,100,70,70);

    box13= new Box(700,100,70,70);
    box14= new Box(700,100,70,70);
    box15= new Box(700,100,70,70);
    box16= new Box(700,100,70,70);
    box17= new Box(700,100,70,70);
    box18= new Box(700,100,70,70);
    box19= new Box(700,100,70,70);
    box20= new Box(700,100,70,70);

    hero = new Hero(200,200);

    rope= new Rope(hero.body,{x:400,y:50});

    monster=new Monster(1000,400)

}

function draw(){
    background(Bg)
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    hero.display();
    rope.display();
    monster.display();

}

function mouseDragged(){
    
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
    
}
