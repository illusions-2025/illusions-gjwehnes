
let colourMode;

//this function is called once at the start of a sketch
function setup() {

    //test

    //create a drawing surface on to the web page
    //this drawing surface is 1000 X 600
    canvas = createCanvas(1000,600);

    //move canvas to make way for radio buttons
    canvas.position(20,20);

    //create the radio buttons that will allow us 
    //to choose between all black, all white and
    //illusion mode. place in top left
    
    colourMode = createRadio();
    colourMode.option("2","black");
    colourMode.option("1","white");
    colourMode.option("0","illusion");

    colourMode.selected("2");
    colourMode.position(1020,20);

    //by default positional information in processing
    //are defined as the position of the top left "corner"
    //of the shape.  For our purposes it is much simpler
    //to view the position as the centre of the shape
    //thus we need to shift the rec/ellipse modes to
    //refer to centre
    rectMode(CENTER);
    ellipseMode(CENTER);

}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawCircles(stillColour){
    //draw circle at (100,100) with radius 50
    ellipse(100,100,50,50)
}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawLines(stillColour){

}
//this function is called once every 60 seconds unless
//the noLoop() function is called
//if we were just creating an illusion I would recommend putting in a noLoop()
//to reduce processor load. All examples except reverse-phi can be modified with a noLoop()
//However, as this code is used for breaking down the illusion, the noLoop() is commented out
//so that the illusion can be redrawn correctly after user input interaction
function draw() {
    //150 is grey scale value (0=black, 255=white)
    background(150)
    c = int(colourMode.value());
    drawCircles(c);
    drawLines(c);
    //noLoop();
    //^^^ this stops the page from refreshing 60/s
}
