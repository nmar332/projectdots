let font;
let textLayer;

let container;
let w;
let h;
let border;

let angle = 0;

let imgUrl = "NICK.png";
let img;
let particles = [];  
let initParticles = [];

const PARTICLE_SIZE = 3 //how big the dots are
const RESOLUTION = 8; //the total space between each particle, higher = less

const noiseScale =0.01/2;
const num = 100;

function preload() {
  img = loadImage(imgUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnParticles();
}

function draw() {
  background(255);
  noStroke();
  particles.forEach((particle ) => {
    particle.draw();
    particle.update();
    })

  //   let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * noiseScale * noiseScale);
  //   let a = TAU * n; // TAU is 2x pi
  //   p.x += sin(n);// 0 keeps it still along the axis.
  //   p.y += cos(n); // cos for x and sin for y. USE CONSTRAIN
  //   console.log(constrain(p.x+a, initParticles[count].x-20, initParticles[count].x+20))

  // //   if(p.x < initParticles[count].x-20 || p.x > initParticles[count].x+20){
  // //   // p.x = constrain(p.x+a, initParticles[count].x-20, initParticles[count].x+20);
  // //   p.x = initParticles[count].x;
  // //   //p.y = constrain(p.y+a, initParticles[count].y-20, initParticles[count].y+20);
  // // }else if (p.x == initParticles[count].x){
  // //   p.x += sin(n);// 0 keeps it still along the axis.
  // // }
  // // //While less than 10 keep moving forward, when it hits 10 then reverse direction until back to start. 
    
  //   ellipse(p.x, p.y, PARTICLE_SIZE);

  // //RESET animation once gone too far
  // // if(abs(p.x) > initParticles[count].x +5 || abs(p.x) < initParticles[count].x -5 &&
  // //    abs(p.y) > initParticles[count].y +5 || abs(p.y) < initParticles[count].y -5){
  // //     p.x += acos(a)
  // //     p.y += asin(a)
  // // } 


  // // Single point is slowly wrapped. can we take its inital position and calculate distance then reset?
  //   // if(!onScreen(p)) {
  //   //   p.x = constraintXLow;
  //   //   p.y = constraintYLow;
  //   // }
  //   count += 1;
  //   })
}

function spawnParticles() {
  let rows = 15;
  let rowSize = height/rows;
  let loc = 100;
  
  // FOR IMAGE ONLY
  for(i = 0; i < width; i+=RESOLUTION)  {
    for(j = 0; j < height; j+=RESOLUTION) {
      let x = i / width * img.width;
      let y = j / height * img.height;
      

      const color = img.get(x, y);
      particles.push(new Particle(i, j, color,rowSize/2, i*loc+j*loc));
      //initParticles.push(new Particle(i, j, color));
    }
  }

  //FOR TEXT ONLY
}

function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

class Particle {
  constructor(x, y, color, r, angle) {
    this.x0 = x;
    this.y0 = y;
    this.color = color;
    this.r = r;
    this.angle = angle; 
  }

  update(){
    this.x = this.r*cos(this.angle);
    this.y = this.r*sin(this.angle);
    this.angle += 0.015;  //speed
  }

  draw() {
    fill(this.color);
    ellipse(this.x0+this.x, this.y0+this.y, PARTICLE_SIZE);
  }
}
