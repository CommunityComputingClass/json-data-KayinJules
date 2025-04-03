let data;
let floww=2
let flowprev=1
let names = ["sunflower" , "tulip"]
let y = 40

function preload() {
  data = loadJSON("flower.json");
  catData = 
  loadJSON('https://catfact.ninja/fact');
}

function setup() {
  createCanvas(400, 400);
  background(200);
  
  console.log(catData.fact)
  catFact = catData.fact

  let flowers = data.flowers;
  
  for(let o = 0; o<2; o++){
  for(let n = 0; n<2; n++){
  
  // if(flowprev=0){
  // floww = 1
  // }
  // if(flowprev=1){
  //   floww = 0
  //   } 
  //   flowprev = floww 
    y=y+50 
    fill(flowers[n].r,flowers[n].g,flowers[n].b);
  ellipse(y,150,150,150);
  stroke(0);
  textSize(22);
  text(flowers[n].name, y, 150);
  textSize(14)
  text(catFact, 100,100)
  }
}
}

function draw(){
  textFont('Arial')
  fill ("white")
  textSize(14)
    text(catFact, 100,100)

}



