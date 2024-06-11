function setup() {
    createCanvas(600, 600);
    background('red');
  }
  
  function draw() {
    stroke('black');
    fill('withe');
    
    if(mouseIsPressed)
      rect(mouseX, mouseY, 20, 35)
  }
  
  