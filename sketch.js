const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine, world;
var particles =[];
var divisions = [];
var plinkos = [];
var divisionHeight = 300;
var ground1;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //render = Render.create({ element: document.body, engine: engine, options: { width: 480, height: 800, wireframes: false } });

  ground1 = new Ground(240,height,480,20);  
  for (var k = 0; k <=width; k = k + 80) { 
    divisions.push(new Divisions(k, height- divisionHeight/2, 10, divisionHeight)); 
  } 

  for (var l = 15; l<= width; l= l+50){
    plinkos.push(new Plinko(l,75));    
  }
  for (var s = 40;s<= width-10; s= s+50){
    plinkos.push(new Plinko(s,175));    
  }
  for (var h = 15;h<= width-10; h= h+50){
    plinkos.push(new Plinko(h,275));    
  }
  for (var c = 40;c<= width-10; c= c+50){
    plinkos.push(new Plinko(c,375));    
  }
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  //Render.run(render);
 


  
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2 - 10, width/2 +10),10,10));
  }
  
 
 
  for(var k = 0; k < divisions.length ; k++ ){
    divisions[k].display();
    
  }
  
  for(var l = 0; l < plinkos.length ; l++ ){
    plinkos[l].display();
  }
  for(var s = 0; s < plinkos.length ; s++ ){
    plinkos[s].display();
  }
  for(var h = 0; h < plinkos.length ; h++ ){
    plinkos[h].display();
  }
  for(var c = 0; c < plinkos.length ; c++ ){
    plinkos[c].display();
  }
  for(var j = 0;j<particles.length;j++){
    particles[j].display();    
  }
  ground1.display();
  
}