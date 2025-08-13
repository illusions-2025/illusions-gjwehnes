
let colourMode;
const CIRCLE_WIDTH = 50
const SCREEN_WIDTH = 1000
const SCREEN_HEIGHT = 600
const SIN_45 = Math.sin(45 * Math.PI / 180)
const BAR_OFFSET = SIN_45 * (CIRCLE_WIDTH / 2) * (9/10)
const BAR_WIDTH = (1 -  SIN_45) * 2 * (CIRCLE_WIDTH / 2) * (10/9)
const BAR_HEIGHT = CIRCLE_WIDTH * 0.1

//this function is called once at the start of a sketch
function setup() {

    //test

    //create a drawing surface on to the web page
    //this drawing surface is 1000 X 600
    canvas = createCanvas(SCREEN_WIDTH,SCREEN_HEIGHT);

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
    rectMode(CORNER);
    ellipseMode(CENTER);

}

//if stillColour is truthy, image will be black or white
//but not both (ie no illusion)
function drawCircles(stillColour){

	stroke(0)   //stroke color black
	fill(0)     //fill color black
	
	let c = 0

	for (let y = CIRCLE_WIDTH; y < SCREEN_HEIGHT; y+=CIRCLE_WIDTH * 2) {		
	    for (let x = CIRCLE_WIDTH; x <  SCREEN_WIDTH; x+=CIRCLE_WIDTH) {
			
			if (stillColour == 0) {
				c = 255 - 255 * (x % (CIRCLE_WIDTH * 2))
			}
			else if (stillColour == 1) {
				c = 255
			}
			else {
				c = 0
			}
			fill(c)
	        ellipse(x,y,CIRCLE_WIDTH,CIRCLE_WIDTH)
			rect(x + BAR_OFFSET,y - CIRCLE_WIDTH / 2,BAR_WIDTH ,BAR_HEIGHT)
			fill(255 - c)
			rect(x + BAR_OFFSET,y + CIRCLE_WIDTH / 2 - BAR_HEIGHT,BAR_WIDTH ,BAR_HEIGHT)
	    }    
	}
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
