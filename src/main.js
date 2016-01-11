// Context variables
var CANVAS = document.getElementById("mainCanvas");
var context = CANVAS.getContext("2d");

// Cursor variables
var cursX = 0;
var cursY = 0;

var unionNbr = 0;
var canvasLocation = 0;
var CIRCLE_RADIUS = 20;

// Array that stores all drawn circles
var circles = [];

// Main function calls
drawAxes();

// Catch the left click event
document.addEventListener("click", function(e) {
    updateCursorPosition(e);
    var x = cursX - CANVAS.offsetLeft;
    var y = cursY - CANVAS.offsetTop;
    if (((x > 0) && (y > 0)) && ((x < CANVAS.offsetWidth) && (y < CANVAS.offsetHeight))) {
	drawCircleAtPoint(x, y);
    }
});

// catch the LEFT button click event
document.getElementById("leftButton").addEventListener("click", function(e) {
    moveCanvas(-10);
});

// catch the RIGHT button click event
document.getElementById("rightButton").addEventListener("click", function(e) {
    moveCanvas(10);
});

function	moveCanvas(value) {
    canvasLocation += value;
    clearCanvas();
    drawAxes();
    drawCircles();
    console.log(canvasLocation);
}

function	clearCanvas() {
    context.clearRect(0, 0, CANVAS.offsetWidth, CANVAS.offsetHeight);
}

function	updateCursorPosition(e) {
    cursX = e.pageX;
    cursY = e.pageY;
}

/*
** Check if the circle is in the
** first union to color it in RED
*/
function	isInFirstUnion(x, y) {
    var arrayLength = circles.length;
    for (var i = 0; i < arrayLength; i++) {
	if ((circles[i].union === 1)
	    && (Math.sqrt(Math.pow(circles[i].x - x, 2) + Math.pow(circles[i].y - y, 2))
		<= 2 * CIRCLE_RADIUS)) {
	    return true;
	}
    }
    return false;
}

// draw a circle to the x, y position
function	drawCircleAtPoint(x, y) {
    if ((unionNbr === 0) || (isInFirstUnion(x, y) === true)){
	circles.push({"x" : x, "y": y, "union": 1});
	unionNbr = 1;
	drawCircleOnCanvas(x, y, 1);
    }
    else {
	unionNbr++;
	circles.push({"x" : x, "y": y, "union": unionNbr});
	drawCircleOnCanvas(x, y, 0);
    }
}

function	drawAxes() {
    var x = CANVAS.offsetWidth / 2;
    var y = CANVAS.offsetHeight / 2;
    context.beginPath();
    context.strokeStyle = "#0000ff"; // BLUE

    // draws horizontal axis
    context.moveTo(x - 10, y);
    context.lineTo(x + 10, y);
    context.stroke();

    // draws vertical axis
    context.moveTo(x, y - 10);
    context.lineTo(x, y + 10);
    context.stroke();

    context.strokeStyle = "#000000"; // BLACK
}

function	drawCircleOnCanvas(x, y, inUnion) {
    context.beginPath();
    context.arc(x, y, CIRCLE_RADIUS, 0, 2 * Math.PI);
    context.strokeStyle = "#000000";
    if (inUnion === 1) {
	context.strokeStyle = "#ff0000";
    }
    context.stroke();
}

function	drawCircles() {
    var arrayLength = circles.length;
    for (var i = 0; i < arrayLength; i++) {
	drawCircleOnCanvas(circles[i].x, circles[i].y, circles[i].union);
    }
}
