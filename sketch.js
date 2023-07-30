let font;
let textLayer;

let container;
let w;
let h;
let border;

let angle = 0;

let imgUrl = "temp.jpeg";
let img;
let p;  

const PARTICLE_SIZE = 10;


// Plan
// clear template
// duplicate code to the point of image to dots
// get the dots waving
// swap the setup to take text input?


function preload() {
  img = loadImage(imgUrl);
}

// function updateContainer() {
//   container = select('#sketchContainer');
//   w = parseFloat(getComputedStyle(container.elt).getPropertyValue('width'));
//   h = parseFloat(getComputedStyle(container.elt).getPropertyValue('height'));
// }

// function windowResized() {
//   updateContainer();
//   resizeCanvas(w, h);
// }

function setup() {
  // updateContainer();
  createCanvas(windowWidth, windowHeight);
  smooth();
  // canvas.parent("#sketchContainer");
  p = new Particle(70, 70, 0);
}

function draw() {
  background(40);
  image(img, 0, 0 );
  p.draw();
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  update() {

  }

  draw() {
    fill(this.color)
    ellipse(this.x, this.y, PARTICLE_SIZE);
  }
}