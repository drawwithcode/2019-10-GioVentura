var angle = 0;
var mirrors = [];

var lumio;

function preload(){
  lumio = loadImage("image/lumio.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  for (let i = 0; i < 14; i++) {
    let r = random(20,100);
    let h = 12;
    let t_x = random(width/4);
    let t_y = random(width/4);
    let t_z = random(0,2);
    mirrors[i] = new Mirror(r,h,t_x,t_y,t_z);
  }
}

function draw() {
  background(0);

  noCursor();
  image(lumio, mouseX-width/2, mouseY- height/2);

  // directionalLight(100,0,140,0.4,0,-200,0);
    pointLight(0, 0, 250, mouseX-300, mouseY-300, 0);
    frameRate(55);

    for (let i = 0; i < mirrors.length; i++) {
      mirrors[i].show();
      mirrors[i].move();
    }

}


class Mirror {
  constructor(_r,_h,_t_x,_t_y,_t_z) {
    this.r = _r;
    this.h = _h;
    this.x = _t_x;
    this.y = _t_y;
    this.z = _t_z;
  }
  move() {
    rotateX(angle);
    rotateY(angle * 0.3);
    rotateZ(angle * 1.2);
    angle += 0.02;
  }




  show() {
    noStroke();
    specularMaterial(255);
    translate(this.x/5,this.y/5,this.z/5);
    cylinder(this.r, this.h);
  }
}
