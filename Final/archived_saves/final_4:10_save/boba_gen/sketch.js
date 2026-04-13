// Your task is to create a generator, a program or system that generates a collection of things. Each result should be unique, but produced by the same code. The subject is up to you. Your generator might produce patterns, animations, teacups, faces, poems, a letter of the alphabet etc etc.

// (1.5) Submitted brainstorming materials
// (1.5) Incorporated custom functions and variables in the sketch.//done
// (2.5 pts total, 0.5 per property) Introduced variables to represent the values for the changing properties/qualities. Minimum five properties.//done
// (1) Incorporated comments in the sketch, clarifying roles and functionality.//done
// (2.5 pts total, 1.25 each) At least twice: generate unpredictability in ways that go beyond the use of just the random function alone. Incorporated conditionals with random numbers for ‘choices.’ //done --> where the x of the mouse is when clicking influences where the straw ends up
// (1) Interactivity: Generate new values for your variables each time the mouse or keyboard is pressed.//done

function setup() {
  createCanvas(400, 400);
  background(225);
  let drinkColor = int(random(1, 5));
  let shape = int(random(1, 3)); //int from p5js site, to make integers
  let topping = int(random(1, 5));
  let foam = int(random(1, 3));
  let straw = int(random(1, 6));
  drinkMaker(200, 200, drinkColor, shape, topping, foam, straw);
}

function mousePressed() {
  background(225);
  if (mouseX < width / 3) {
    //small x
    //want straw to enter on the left
    //2 or 3
    let drinkColor = int(random(1, 5));
    let shape = int(random(1, 3)); //int from p5js site, to make integers
    let topping = int(random(1, 5));
    let foam = int(random(1, 3));
    let straw = int(random(2, 4));
    drinkMaker(200, 200, drinkColor, shape, topping, foam, straw);
  } else if (mouseX < (2 * width) / 3 && mouseX > width / 3) {
    //middle x
    //want straw to be in middle
    //1
    let drinkColor = int(random(1, 5));
    let shape = int(random(1, 3)); //int from p5js site, to make integers
    let topping = int(random(1, 5));
    let foam = int(random(1, 3));
    let straw = 1;
    drinkMaker(200, 200, drinkColor, shape, topping, foam, straw);
  } else if (mouseX > (2 * width) / 3) {
    //high x
    //want straw to be on the left
    //4 and 5
    let drinkColor = int(random(1, 5));
    let shape = int(random(1, 3)); //int from p5js site, to make integers
    let topping = int(random(1, 5));
    let foam = int(random(1, 3));
    let straw = int(random(4, 6));
    drinkMaker(200, 200, drinkColor, shape, topping, foam, straw);
  }
}

function drinkMaker(xpos, ypos, drinkColor, shape, topping, foam, straw) {
  //setup
  ellipseMode(CENTER);
  rectMode(CENTER);

  //drink color modes
  push();
  translate(xpos, ypos);
  strokeWeight(0);
  let drinkWidth = 150;
  let drinkHeight = 200;
  let space = 40; //space between toppings
  let size = 25; //size of toppings
  let toppingsY = 0;

  strokeWeight(0);

  if (drinkColor == 1) {
    //classic milk tea
    fill(200, 150, 100); //light brown
    rect(0, 10, drinkWidth, drinkHeight);
  } else if (drinkColor == 2) {
    //taro milk tea
    fill(200, 150, 200); //pale purple
    rect(0, 10, drinkWidth, drinkHeight);
  } else if (drinkColor == 3) {
    //butterfly pea
    for (let i = 0; i < 12; i++) {
      //converts i to a fraction between 0 and 1
      ombreMap = map(i, 0, 12, 0, 1);

      //that position determines where the LerpedColor
      ombreTop = color(200, 50, 255); //purple
      ombreBottom = color(255, 150, 0); //yellow-orange
      let ombreColor = lerpColor(ombreBottom, ombreTop, ombreMap);
      fill(ombreColor); //purple to yellow
      rect(
        0,
        drinkHeight / 2 - (i * drinkHeight) / 12.2,
        drinkWidth,
        drinkHeight / 12
      );
    }
  } else if (drinkColor == 4) {
    //matcha latte
    for (let i = 0; i < 12; i++) {
      //converts i to a fraction between 0 and 1
      ombreMap = map(i, 0, 12, 0, 1);

      //that position determines where the LerpedColor
      ombreTop = color(100, 200, 100); //green
      ombreBottom = color(255, 255, 240); //cream
      let ombreColor = lerpColor(ombreBottom, ombreTop, ombreMap);
      fill(ombreColor); //green to cream color
      rect(
        0,
        drinkHeight / 2 - (i * drinkHeight) / 12.2,
        drinkWidth,
        drinkHeight / 12
      );
    }
  }
  //end color modes

  //drink shape modes
  if (shape == 1) {
    //rectangle
    strokeWeight(3);
    stroke(20, 20, 20, 200); //dark gray w opacity
    noFill();
    rect(0, 10, drinkWidth + 20, drinkHeight + 20);
  } else if (shape == 2) {
    strokeWeight(3);
    stroke(20, 20, 20, 200); //dark gray w opacity
    noFill();
    console.log(mouseX);
    console.log(mouseY);
    quad(-85, 115, -95, -100, 95, -100, 85, 115);
    //using quad to create trapezoid shape
    //(-85,115)bottom left
    //(-95,-100)top left
    //(95,-100)top right
    //(85,115)bottom right
  }
  //end shape modes
  pop();

  //ok this is rant section
  //if i forget to take this out this is a treat for whoever is reading this

  //ok so the same day this project is due i also have a very big animation project due for another class
  //and so i was stressing abt both of these simultaneously
  //i did a bunch of stuff w the other project over the weekend and am  now doing this second
  //but you know what i found out today!!
  //that the prof for that class postponed the due date for a week and a half
  //and week AND A HALF
  //and now i am teetering on the edge of burnout for no reason now!! bc that project isn't due for a week and a half now!!
  //but i still must push on and do this project
  //rip
  //anyways rant over

  push();
  translate(xpos - space, ypos + space);

  //straw modes
  if (straw == 1) {
    //middle straight
    strokeWeight(20);
    stroke(0, 0, 0);
    line(space, 50, space, -175);
  } else if (straw == 2) {
    //middle tilted left
    strokeWeight(20);
    stroke(0, 0, 0);
    line(space, 50, 0, -175);
  } else if (straw == 3) {
    //left straight
    strokeWeight(20);
    stroke(0, 0, 0);
    line(0, 50, 0, -175);
  } else if (straw == 4) {
    //middle tilted right
    strokeWeight(20);
    stroke(0, 0, 0);
    line(space, 50, space * 2, -175);
  } else if (straw == 5) {
    //right straight
    strokeWeight(20);
    stroke(0, 0, 0);
    line(space * 2, 50, space * 2, -175);
  }

  //topping modes
  strokeWeight(1);

  if (topping == 1) {
    //classic boba
    strokeWeight(3);
    stroke(75, 40, 20, 50);
    fill(75, 40, 20, 245);
    for (i = 0; i < 3; i++) {
      ellipse(i * space, toppingsY, size);
    } //end for loop
    for (j = 0; j < 2; j++) {
      //to make the second row, offset from the first
      ellipse(j * space + 0.5 * space, toppingsY + 0.75 * space, size);
    } //end for loop
  } else if (topping == 2) {
    //clear boba
    strokeWeight(3);
    stroke(255, 250, 225, 50);
    fill(255, 250, 225, 200);
    for (i = 0; i < 3; i++) {
      ellipse(i * space, toppingsY, size);
    }
    for (j = 0; j < 2; j++) {
      ellipse(j * space + 0.5 * space, toppingsY + 0.75 * space, size);
    }
  } else if (topping == 3) {
    //lychee jelly
    strokeWeight(5);
    stroke(255, 250, 225, 50);
    fill(255, 250, 225, 200);
    for (i = 0; i < 3; i++) {
      rect(i * space, toppingsY + space / 10, size * 1.25, size * 0.75);
    }
    for (j = 0; j < 2; j++) {
      rect(
        j * space + 0.5 * space,
        toppingsY + 0.75 * space,
        size * 1.25,
        size * 0.75
      ); //spacing this out bc too long otherwise
    }
  } else if (topping == 4) {
    //grass jelly
    strokeWeight(5);
    stroke(30, 30, 50, 50);
    fill(30, 30, 50, 245);
    for (i = 0; i < 3; i++) {
      rect(i * space, toppingsY + space / 10, size * 1.25, size * 0.75);
    }
    for (j = 0; j < 2; j++) {
      rect(
        j * space + 0.5 * space,
        toppingsY + 0.75 * space,
        size * 1.25,
        size * 0.75
      ); //spacing this out bc too long otherwise
    }
  }

  //end topping modes

  //foam modes
  if (foam == 1) {
    strokeWeight(0);
    fill(255, 255, 255, 235);
    rect(space, -115, drinkWidth, drinkHeight / 6);
  } else if (foam == 2) {
    //no foam
  }
  //end foam modes

  pop();
} //end function
