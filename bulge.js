
let drawGridCheckBox;
let drawDotsCheckBox;
//this function is called once at the start of a sketch
function setup() {


    //create a drawing surface on to the web page
    canvas = createCanvas(900,900);
    canvas.position(20,20);

    //create the checkbox for drawing 
    //checkerbox and dots.  if both on, then illusion is formed    
    drawGridCheckBox = createCheckbox("Draw Checkboard ",true);
    drawGridCheckBox.position(920,20);
    drawDotsCheckBox = createCheckbox("Draw Dots ", true);
    drawDotsCheckBox.position(920,40);

    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER);
    ellipseMode(CENTER);

}


function drawGrid(){
}

function drawDots(){

}
//this function is called once every 60 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    background(150)
    if(drawGridCheckBox.checked()){
        drawGrid();
    }
    if(drawDotsCheckBox.checked()){
        drawDots();
    }
    //noLoop();
    //^^^ this stops the page from refreshing 60/s
}
