// “seawave-blur” by loxi
// https://openprocessing.org/sketch/960311
// License CreativeCommons Attribution ShareAlike
// https://creativecommons.org/licenses/by-sa/3.0

//which is a branch of:

// “Surf's up blur” by Robert D'Arcy
// https://openprocessing.org/sketch/854271
// License CreativeCommons Attribution ShareAlike
// https://creativecommons.org/licenses/by-sa/3.0


let waveNum = 6000;
let imgProc;
let waves = [];

function setup() { 
  imgProc = createCanvas(2000, 1500);
  background(255); //white
  frameRate(30);
	
	setParticles()
}


function draw() {  

	push()
		drawingContext.filter='blur(2px)'
		image(imgProc, 0, 0)
	pop()
	
	noStroke()
	background(255, 0.75) //white
  for (let w of waves) {
		w.move();
	}
}

function setParticles() {
	background(255)
	waves = []
	for (let i = 0; i < waveNum; i++) {
		let newW = new Wave({
			pos: createVector(random(width), random(height)),
			increase: 0,
			theta: 0,
		})
		waves.push(newW)
	}
}

class Wave {
	constructor(args){		
		let def = {
  		pos: createVector(random(width), random(height)),
			increase: 0,
			theta: 0, 
			color: color(20, 255, 0),//green
	}
		
		Object.assign(def,args)
		Object.assign(this,def)
	}


  update() {
		let adj = map(this.pos.y, 0, height, 205, 0);
		this.color = color(int(adj)-25, 175, int(adj));
    this.increase +=  0.008;
    this.theta = noise(this.pos.x * 0.008, this.pos.y * 0.004, this.increase) * TWO_PI;
    this.pos.x += 2 * cos(this.theta);
    this.pos.y += 2 * sin(this.theta);
  }

  display() {
		let n = noise(0.01*width)
    if (this.pos.x > 0 && this.pos.x < width && this.pos.y > 0  && this.pos.y < height) {
				fill(this.color)
				ellipse(int(this.pos.x) ,int(this.pos.y), 2)
				fill(color(255,255,255,120))
				ellipse(int(this.pos.x +n) ,int(this.pos.y +random(5)), 1)
				// fill(color(255,255,255,100))
				// ellipse(int(this.pos.x +random(2) ) ,int(this.pos.y +n), 1)
    }
  }

  wrap() {
    if (this.pos.x < 0){this.pos.x = width;}
    if (this.pos.x > width ){ this.pos.x =  0;}
    if (this.pos.y < 0 ){ this.pos.y = height;}
    if (this.pos.y > height) {this.pos.y =  0;}
  }
	
	move(){
		this.update();
		this.wrap();
		this.display();
	}
	
}


