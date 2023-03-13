// This sketch draws a random skull!
// Try adding a random hat to the skull,
// or try generating a different random drawing!

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {

  // Draw a random background color.
  background(random(255), random(255), random(255));
  noStroke();

  // We'll draw our skull in the middle of the screen.
  var skullX = width / 2;
  var skullY = height / 2;

  // Give the skull a random width and height.
  var skullWidth = random(50, 400);
  var skullHeight = random(50, 300);

  // Change the fill color to a random color.
  fill(random(255), random(255), random(255));

  // Draw the top circle part of the skull.
  ellipse(skullX, skullY, skullWidth, skullHeight);

  // Draw the bottom rectangle part of the skull.
  rect(skullX - skullWidth / 4,
    skullY + skullHeight / 4,
    skullWidth / 2,
    skullHeight / 2);

  // Change the fill color to black.
  fill(0);

  // Below, we use the skullX, skullY, skullWidth, and skullHeight
  // variables to draw the eyes and teeth inside the skull.
  // If this is confusing, try drawing out a few examples
  // with a pencil on a piece of graph paper!

  // Draw the eyes.
  var eyeSpacing = skullWidth / 4;
  var eyeWidth = skullWidth / 6;
  var eyeHeight = skullHeight / 4;
  ellipse(skullX - eyeSpacing,
    skullY,
    eyeWidth,
    eyeHeight);
  ellipse(skullX + eyeSpacing,
    skullY,
    eyeWidth,
    eyeHeight);

  // Draw the teeth.
  var teethWidth = skullWidth / 30;
  var teethHeight = skullHeight / 4;
  var teethTop = skullY + skullHeight / 2;
  var teethSpacing = skullWidth / 6;
  rect(skullX - teethSpacing,
    teethTop,
    teethWidth,
    teethHeight);
  rect(skullX,
    teethTop,
    teethWidth,
    teethHeight);
  rect(skullX + teethSpacing,
    teethTop,
    teethWidth,
    teethHeight);
}