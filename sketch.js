//Legend:

//Circle(radius,xPosition,yPosition,strokeSize, new Colour (fill),new Colour (stroke))

//Rectangle(xPosition,yPosition,length,height,strokeSize, new Colour (fill), new Colour (stroke))

//Triangle(3Xpositions,3Ypositions,strokeSize,new Colour (fill),new Colour (stroke))
//Triangle:Note: "X position = the first X input"
//Triangle:Note: "Y position = the first Y input"

let shape_possibilities = ["circle","triangle","rectangle"];
let vibeTypes = ["circle","line"]
let vibes = []
let generated_shapes = [];
let rgda = []
let bgm;
let allow = false
let limits = 400;

let circVibe;
let vol;
let amp;
let ampHistory = [];
let goStop;

function setup() {
  createCanvas(800, 800);
  bgm = loadSound('assets/spectre.mp3', soundLoaded);
  amp = new p5.Amplitude()

  geometricBG() // turned to a function in another file
  
  circVibe = new Circle(1,400,400,10, new Colour(0,0,0,75), new     Colour(0,0,0,150))
  
  //goStop = new button()

}

function soundLoaded() {
  bgm.play();
}


function draw() {
  
  dynaBG()
  
  vol = amp.getLevel()
  ampHistory.push(vol)
  
  vibernate("circle")
  
  circVibe.show()
  
  showVibe()
}


function vibernate(type) {
  if (type == "circle"){

    if (allow == true) {
      circVibe.r = circVibe.r + ceil(limits*(1/10))
      if (circVibe.r> limits){
        circVibe.r = 1
        allow = false
      }
  }else{
    limits = vol*2500;
    allow = true
   }
    
  }
}

function showVibe() {
  if (ampHistory.length+150>width){
    ampHistory.splice(0,1)
  }
 stroke(255,255,255,255)
  strokeWeight(2)
  noFill()
  beginShape();
  for(let i = 0; i<ampHistory.length; i++){
   let y = map(ampHistory[i],0,1,height,0)
   vertex(i+75,y)
 }
  endShape();
  let avg;
  let ttotal =0;
  for(let i = 0; i<ampHistory.length; i++){
    stroke(0,0,0)
     
     ttotal = ttotal + ampHistory[i]
    
    //print(ampHistory[i]/ampHistory.length)

  }
   avg = ttotal/ampHistory.length*800
  
  strokeWeight(4)
  line(75,-avg+800,ampHistory.length+75,-avg+800)
  line(ampHistory.length+75,-avg+725,ampHistory.length+75,-avg+875)
  line(75,-avg+725,75,-avg+875)
  
  //console.log(avg)
}