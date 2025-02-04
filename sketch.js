function preload() {
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  shader(myShader);
  noStroke();
}

function draw() {
  clear();
  rect(0,0,width,height);
}
