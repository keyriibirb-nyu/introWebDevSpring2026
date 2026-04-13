/*

Written part of assignment here:
https://docs.google.com/document/d/1M28Eksagl6ADXilP5TdJ2xuhIELJ5q4AR08tCRLzLsY/edit?usp=sharing
*/

//for prof:
//make sure to upload a photo to avoid throwing errors, lots of variables depend on dimensions of uploaded image

//hotkeys:
//press [SPACE] = "pattern" scene --> will display stitches, guides, slider, print button
//press [p] = "print" scene --> will clean up background, remove buttons and sliders, export png of the scene
//press [r] = reset button, redirects back to "intro" scene. make sure to reupload photo, the previous file is still shown next to the "Choose File" button but the variable used to store it is cleared and will throw an error.


//using the pointillism assignment as the base
//image input from p5js createFileInput tutorial
//used https://www.geeksforgeeks.org/javascript/p5-js-save-function/ as tutorial for save() funct
//https://p5js.org/reference/p5/filter/ for filters
//font: https://fonts.google.com/specimen/Pixelify+Sans
//by Stefie Justprince

//declaring variables for setup
var photoTranslateAmtX, photoTranslateAmtY;
let colorArray = [];
let scene = "intro";
let introBgColor = [];
let introTextColor = [];
let photo, photoInput;
let colorPixel, pixelSize;
//let intInput; -- scrapped
let slider, sliderSize, sliderNum;
let pixelX = [];
let pixelY = [];
var buttonOn, printButtonOn;
var grayFilterOn = false;
var posFilterOn = false;

//variables for math
let widthOverPS,
  widthOverPSRemainder,
  heightOverPS,
  heightOverPSRemainder,
  pixelCountWidth,
  pixelCountHeight;
let widthLength, heightLength;


function setup() {
  loop();
  createCanvas(600, 600);

  //"Choose File", a place for user to upload an image
  photoInput = createFileInput(processImage);
  photoInput.position(width / 2 - 75, height / 2);
  photoInput.hide();

  //list of pastels for the intro scene theme
  redArray = [250, 200, 200];
  yellowArray = [250, 225, 200];
  greenArray = [225, 250, 200];
  blueArray = [200, 225, 250];
  purpleArray = [225, 200, 250];
  introBgColorArray = [
    redArray,
    yellowArray,
    greenArray,
    blueArray,
    purpleArray,
  ];
  introBgColor = random(introBgColorArray);

  //slider for user to choose pixel size
  slider = createSlider(5, 50);
  slider.position(25, height / 1.05);
  sliderSize = (width / 1.1)/2;
  slider.size(sliderSize);
  slider.hide(); //will show later with labels and lines in displaySlider();
  
  grayButton = createButton("GRAYSCALE");
  grayButton.position(width/1.9,height/1.05);
  grayButton.hide();
  
  posButton = createButton("POSTERIZE");
  posButton.position(width/1.5,height/1.05);
  posButton.hide();
  
  

}

//to assign the image a variable
function processImage(file) {
  photo = loadImage(file.data);
}


//intro page, gives user info, displays slider and upload button, etc
function introScene() {
  background(introBgColor);
  photoInput.show();//place for user to upload file
  button();//START! button

  //make a darker vers of bg color for text
  introTextColor = [
    introBgColor[0] - 125,
    introBgColor[1] - 125,
    introBgColor[2] - 125,
  ];

  //setup
  fill(introTextColor[0], introTextColor[1], introTextColor[2]);
  textAlign(CENTER, CENTER);

  //stroke is the same as introTextColor but w lower opacity
  stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);

  //title
  textSize(50);
  textStyle(BOLD);
  textFont("Courier New");
  strokeWeight(5);
  text("Pixel Pattern Pal", width / 2, height / 4);

  //subtitle
  textStyle(NORMAL);
  textSize(25);
  textFont("Courier New");
  strokeWeight(3);
  text("A cross-stitch pattern maker", width / 2, height / 2.75);

  //photo upload instructions
  textSize(20);
  textFont("Courier New");
  strokeWeight(2);
  text("1. Input your reference photo here:", width / 2, height / 2.25);

  //start instructions
  textSize(20);
  textFont("Courier New");
  strokeWeight(2);
  text("2. Press [START!] to generate the pattern!", width / 2, height / 1.75);

  //slider intructions
  textSize(18);
  textFont("Courier New");
  strokeWeight(1);
  text(
    "     # of stitches on the longest side",
    width / 4,
    height / 1.125
  );
  
  //button labels
  textSize(18);
  textFont("Courier New");
  strokeWeight(1);
  text(
    "<---  filters",
    width / 1.12,
    height / 1.04
  );
  
}//end introScene()

//class for pixels to sit in, bc have to generate thousands of them and store their x and y values to work with later in numberCrunch()
class pixel {
  constructor(x, y, size, shade) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.shade = shade; //shade is just another word for color here
  }

  //displays the pixels in their proper spot
  display() {
    rect(this.x, this.y, this.size, this.size);
  }

  //adds the x and y of the pixels to arrays, to later be numberCrunch()ed
  appendArray() {
    append(pixelX, this.x);
    append(pixelY, this.y);
    append(colorArray, this.shade);
  }
}

//draws the stitches
function drawPattern() {
  //draws the stitches from the pixels

  //image setup
  imageMode(CENTER);
  //clearing arrays of prev. data
  pixelX = [];
  pixelY = [];
  colorArray = [];

  if (photo) {
    //determining proportion of photo, resizing to fit canvas
    photoRatio = photo.width / photo.height;

    if (photoRatio > 1) { //width > height (long boi)
      photo.resize(500, 500 / photoRatio);
      photoTranslateAmtX = (width - photo.width) / 2;
      photoTranslateAmtY = (height - photo.height) / 2;
      
    } else if (photoRatio < 1) { //height > width (tall boi)
      photo.resize(500 * photoRatio, 500);
      photoTranslateAmtX = (width - photo.width) / 2;
      photoTranslateAmtY = (height - photo.height) / 2;
    }
    
    push();
    //centers photo in frame
    translate(photoTranslateAmtX, photoTranslateAmtY);

    //setting up display
    strokeWeight(0);
    rectMode(CORNER);

    //drawing stitches
    for (i = 0; i <= 500; i += pixelSize) {
      //distance is size of square pixels, determined by slider
      for (j = 0; j <= 500; j += pixelSize) {
        let pixelColor = photo.get(i, j);

        //converts to thread color array
        fill(pixelColor);

        //creates pixel object for each stitch
        colorPixel = new pixel(i, j, pixelSize, pixelColor);
        colorPixel.display();
        colorPixel.appendArray();
      } //end for j loop
    } //end for i loop

    pop();
  } else {//no photo uploaded
    scene = "error";
  }
}

//all the math to calculate stitch lengths of pattern (bc for loop drawing the stitches will round)
function numberCrunch() {
  if (photo) {
    
    //PS stands for pixel size
    widthOverPS = photo.width / pixelSize;
    widthOverPSRemainder = photo.width % pixelSize;
    heightOverPS = photo.height / pixelSize;
    heightOverPSRemainder = photo.height % pixelSize;

    if (widthOverPSRemainder > 0) {//there is remainder, will round up
      widthOverPSRemainder = 0;//so it doesn't keep adding
      pixelCountWidth = int(widthOverPS) + 1;
    } else {
      //photo width divided by pixel size is a whole number
      pixelCountWidth = int(widthOverPS);
    }

    if (heightOverPSRemainder > 0) {//there is remainder, will round up
      //round up
      heightOverPSRemainder = 0;
      pixelCountHeight = int(heightOverPS) + 1;
    } else {
      //whole number
      pixelCountHeight = int(heightOverPS);
    }

    //width stitch count
    widthLength = pixelCountWidth * pixelSize; //to get the numbers to frame the photo
    //height stitch
    heightLength = pixelCountHeight * pixelSize;
  } else {//no photo upload
    scene = "error";
  }
}//end numberCrunch();

//putting drawPattern() and numberCrunch() together to create black pattern outlines
function displayPattern() {
if(photo){
  if (scene == "pattern") {//background for pattern scene, print button
    background(introBgColor); //base color
    
    fill(255); //white
    rectMode(CENTER);
    rect(width / 2, height / 2, width / 1.1, height / 1.1); //framing square
    
//     printButton = new buttonSwitch(width/1.1,height-height/1.1,width/12)
//     printButton.animateClick();
//     printButton.detectPrint();
    
    printButton();
    
    
  } else if (scene == "print") {//blank background for clean export doc
    background(255); //white
  }

  
    //grayscale button
  grayButton.mousePressed(grayToggle);
  if (grayFilterOn == true){
    filter(GRAY);
  }
  
    
   //posterize button
  posButton.mousePressed(posToggle);
  if (posFilterOn == true){
    filter(POSTERIZE,10);
  }
  
  drawPattern();//displays stitches
  numberCrunch();//calculates the width and height of pattern in stitches

  push();
  //centers lines in frame
  translate(photoTranslateAmtX, photoTranslateAmtY);

  //black framing square
  rectMode(CORNER);
  strokeWeight(1);
  stroke(0); //black
  noFill();
  rect(0, 0, widthLength, heightLength);

  //label numbers setup
  noStroke();
  textSize(10);
  textFont("Courier New");
  fill(0);

  //label numbers: height (y axis)
  textAlign(RIGHT, CENTER);
  text("0 ", 0, heightLength);//start of height
  text(pixelCountHeight + " ", 0, 0);//end of height

  //label numbers: width (x axis)
  textAlign(CENTER, TOP);
  text("0", 0, heightLength); //start of width
  text(pixelCountWidth, widthLength, heightLength); //end of width

  
  if (pixelCountHeight >= pixelCountWidth) {//height > width (tall boi)
    sliderNum = pixelCountHeight;
  } else if (pixelCountHeight < pixelCountWidth) {//width < height (long boi)
    sliderNum = pixelCountWidth;
  }

  //thick lines, every 5 stitches
  //vertical lines
  for (i = pixelSize * 5; i <= widthLength; i += pixelSize * 5) {
    strokeWeight(2);
    stroke(0);
    line(i, 0, i, heightLength);
  }
  //horizontal lines
  for (i = pixelSize * 5; i <= heightLength; i += pixelSize * 5) {
    strokeWeight(2);
    stroke(0);
    line(0, i, widthLength, i);
  }

  pop();
}else{//no photo upload
  scene = "error"; 
}
}//end displayPattern()

//displays the slider, unit guide, filter buttons
function displaySlider() {
  
  //show slider and buttons
  slider.show();
  grayButton.show();
  posButton.show();
  
  //connect slider to control size of stitches
  pixelSize = slider.value();

  //slider unit setup
  textAlign(CENTER, BOTTOM);
  textSize(18);
  textFont("Courier New");
  strokeWeight(1);

  //y range of marking lines
  topY = width / 1.06;
  bottomY = width / 1.01;

  //x range of marking lines
  beginningX = width * 0.06;
  endingX = width / (1.03*2);

  //drawing marking lines along the slider
  for (i = beginningX; i <= endingX; i += 17) {
    
    //marking lines
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 100);
    line(i, topY, i, bottomY);
  }

  //100 and 0 at ends of slider
  noStroke();
  fill(introTextColor[0], introTextColor[1], introTextColor[2]);
  text("100", beginningX, topY);
  text("10", endingX, topY);

  //# out of 100 text (when in pattern scene)
  if (sliderNum) {
    text(sliderNum + " /", beginningX, topY - 15);
  }
  
  
    //grayscale button
  grayButton.mousePressed(grayToggle);
  if (grayFilterOn == true){
    filter(GRAY);
  }
  
  
   //posterize button
  posButton.mousePressed(posToggle);
  if (posFilterOn == true){
    filter(POSTERIZE);
  }
  
} 
  
function grayToggle(){//toggling grayscale indicator

  if(mouseIsPressed){
  if(grayFilterOn == false){
      grayFilterOn = true;
    }else if (grayFilterOn == true){
      grayFilterOn = false;
    }
  }  
}



function posToggle(){//toggling posterize indicator

  console.log(posFilterOn);
  if(mouseIsPressed){
  if(posFilterOn == false){
      posFilterOn = true;
    }else if (posFilterOn == true){
      posFilterOn = false;
    }
  }  
}

//if user tries to go to pattern scene or print w/o uploading image first
function error() {
  slider.hide();
  grayButton.hide();
  posButton.hide();
  background(255, 100, 100); //light red
  textSize(30);
  textFont("Courier New");
  fill(0);
  
  text(
    "Oh no!\nThere seems to be an issue.\nTry reuploading your file\n or uploading a different file.\n(Reload the page,\n or press R to restart.)",
    width / 2,
    height / 3,
    width,
    height / 1.5
  );
}


//start button, displayed in intro scene, use to switch to pattern scene
//can also press [SPACE]
//coding this without object bc the shape is different
function button() {
  //button code taken from my interactive drawing assignment

  //button setup
  let buttonSize = width / 8;
  let buttonRadius = buttonSize / 1.1; //in this case, button width/height
  let buttonX = width / 2;
  let buttonY = height / 1.45;
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(15);

  //dist function from the p5js website
  mouseDistance = dist(mouseX, mouseY, buttonX, buttonY);

  //button changes color when mouse is over button and/or clicked
  if (buttonRadius < mouseDistance) {
    //when mouse is not on the button
    buttonOn = false;

    noStroke();
    fill(introBgColor[0] - 20, introBgColor[1] - 20, introBgColor[2] - 20);
    rect(buttonX, buttonY, buttonSize); //button
    rect(buttonX, buttonY, buttonSize * 1.5, buttonSize / 1.5);

    fill(introTextColor[0], introTextColor[1], introTextColor[2]);
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);
    text("START!", buttonX, buttonY - 2);
  } else if (buttonRadius > mouseDistance && mouseIsPressed) {
    //when mouse is on the button, and mouse is pressed,
    //ie buttonOn = true
    buttonOn = true;
    noStroke();
    fill(introBgColor[0] - 40, introBgColor[1] - 40, introBgColor[2] - 40);
    rect(buttonX, buttonY, buttonSize); //button
    rect(buttonX, buttonY, buttonSize * 1.5, buttonSize / 1.5);

    fill(introTextColor[0], introTextColor[1], introTextColor[2]);
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);
    text("START!", buttonX, buttonY - 2);
  } else {
    //when mouse is on the button, but no press
    buttonOn = false;
    noStroke();
    fill(introBgColor[0] + 20, introBgColor[1] + 20, introBgColor[2] + 20);
    rect(buttonX, buttonY, buttonSize); //button
    rect(buttonX, buttonY, buttonSize * 1.5, buttonSize / 1.5);
    fill(introTextColor[0], introTextColor[1], introTextColor[2]);
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);
    text("START!", buttonX, buttonY - 2);
  }
  
  if (buttonOn == true) {//when button is pressed, changes scene from intro to pattern
    scene = "pattern";
  }
}//end button()



// print button, displayed when pattern is displayed (pattern scene)
// same as intro button, just looks different and when pressed does printScene()
function printButton() {
  //button setup
  let buttonSize = width / 12;
  let buttonRadius = buttonSize / 2; //in this case, button width/height
  let buttonX = width / 1.1;
  let buttonY = height - height / 1.1;
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(12);

  //dist function from the p5js website
  mouseDistance = dist(mouseX, mouseY, buttonX, buttonY);

  //button changes color when mouse is over button and/or clicked
  if (buttonRadius < mouseDistance) {
    //when mouse is not on the button
    printButtonOn = false;

    //button design
    noStroke();
    fill(introBgColor[0], introBgColor[1], introBgColor[2]);
    rect(buttonX, buttonY, buttonSize); //button

    //print text
    fill(introTextColor[0], introTextColor[1], introTextColor[2]);
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);
    text("PRINT", buttonX, buttonY - 2);
  } else if (buttonRadius > mouseDistance && mouseIsPressed) {
    //when mouse is on the button, and mouse is pressed,
    //ie buttonOn = true
    printButtonOn = true;
    noStroke();
    fill(introBgColor[0] - 20, introBgColor[1] - 20, introBgColor[2] - 20);
    rect(buttonX, buttonY, buttonSize); //button

    fill(introTextColor[0], introTextColor[1], introTextColor[2]);
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);
    text("PRINT", buttonX, buttonY - 2);
  } else {
    //when mouse is on the button, but no press
    printButtonOn = false;
    noStroke();
    fill(introBgColor[0] + 20, introBgColor[1] + 20, introBgColor[2] + 20);
    rect(buttonX, buttonY, buttonSize); //button
    fill(introTextColor[0], introTextColor[1], introTextColor[2]);
    strokeWeight(1);
    stroke(introTextColor[0], introTextColor[1], introTextColor[2], 50);
    text("PRINT", buttonX, buttonY - 2);
  }

  if (printButtonOn == true) {
    printScene();
  }
}

//changes the background to white, removes slider, redraws stitches and guides, exports png for user to download
function printScene() {
  scene = "print";
  slider.hide();
  grayButton.hide();
  posButton.hide();
  displayPattern();
}

function draw() {
  photoInput.hide();//want the photo import button to be hidden by default except for in introScene()

  if (scene == "intro") {
    introScene();
    displaySlider();
  } else if (scene == "pattern") {
    displayPattern();
    displaySlider();
  } else if (scene == "print") {
    printScene();
    if (photo) {
      save("pixelpattern.png");
      noLoop(); //prevents disco glitch with a billion file upload
    }
  } else if (scene == "error") {
    error();
  }
} //end draw funct

//shortcuts for ease of use
function keyPressed() {
  if (key == " ") {//
    scene = "pattern";
  }

  if (key == "r" || key == "R") {
    scene = "intro";
    photo = null;
    input = null;
  }

  if (key == "p" || key == "P") {
    scene = "print";
  }
}
