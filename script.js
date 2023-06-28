let colorlist = ['gold', 'yellow', 'turquoise', 'red', 'blue', 'orange']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(60);
}

function draw() {
  
  let circleSize = 25;
  
  noStroke()
  //fill(random(colorlist));
  //ellipse(mouseX, mouseY, 25, 25);
  //ellipse(mouseX, mouseY + 25, 25, 25);
  
  let circle-unit = 1;
  
  if(windowWidth > 1000) {
    circle-unit = 10;
  }else {
    circle-unit = 5;
  }
  for(let i = 0; i < circle-unit; i++)
    {
  fill(random(colorlist));
      ellipse(random(-circleSize, windowWidth), random(-circleSize, windowHeight), circleSize, circleSize);
    }
}