let mImg;

function preload() {
  mImg = loadImage("./abaporu.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

}

function draw() {
  background(220, 20, 120);
  image(mImg, (width - mImg.width)/2, 0);
  
}
