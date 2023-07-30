let font;
let textLayer;

let container;
let w;
let h;
let border;

let angle = 0;

let imgUrl = "temp.jpeg";
let img;
let particles = [];  

const PARTICLE_SIZE = 10; //how big the dots are
const RESOLUTION = 40; //the total space between each particle

const noiseScale =0.01/2;
const num = 100;


// Plan
// clear template **DONE**
// duplicate code to the point of image to dots **DONE**
// get the dots waving
// maybe add some distorion?
// swap the setup to take text input?

// Do we want to convert the key points of an image into 


function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  // updateContainer();
  createCanvas(windowWidth, windowHeight);
  smooth();
  // canvas.parent("#sketchContainer");
  spawnParticles();
  
}

function draw() {
  // background(200);
  // image(img, 0, 0, width, height);
  // filter(GRAY);

  particles.forEach((particle ) => {
    particle.draw();
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  })


  // for(let i = 0; i < num; i ++) {
  //   let p = particles[i];
  //   console.log(p)
  //   point(p.x, p.y);
  //   stroke(p.color);
  //   let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
  //   let a = TAU * n;
  //   p.x += cos(a);
  //   p.y += sin(a);
  //   if(!onScreen(p)) {
  //     p.x = random(width);
  //     p.y = random(height);
  //   }
  // }
}

function spawnParticles() {
  for(i = 0; i < width; i+=RESOLUTION)  {
    for(j = 0; j < height; j+=RESOLUTION) {
      let x = i / width * img.width;
      let y = j / height * img.height;

      const color = img.get(x, y);
      particles.push(new Particle(i, j, color));
    }
  }
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
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
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, PARTICLE_SIZE);
  }
}