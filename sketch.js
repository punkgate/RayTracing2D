// sketch.js

let walls = [];
let particle;
// Variables used for random motion (disabled in this version)
let xoff = 0;
let yoff = 1000;

function setup() {
    createCanvas(1520, 600);
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }

    // Add boundaries around the canvas edges
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    particle = new Particle();
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }

    // Update particle position to follow mouse
    particle.update(mouseX, mouseY);
    
    // Show and cast rays
    particle.show();
    particle.look(walls);

    // Code for random motion (disabled in this version)
    // particle.update(noise(xoff) * width, noise(yoff) * height);
    // xoff += 0.01;
    // yoff += 0.01;
}
