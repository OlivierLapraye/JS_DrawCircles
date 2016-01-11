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

drawAxes();

// Catch the left click mouse event
document.addEventListener("click", function(e) {
    updateCursorPosition(e);
    var x = cursX - CANVAS.offsetLeft;
    var y = cursY - CANVAS.offsetTop;
    if (((x > 0) && (y > 0)) && ((x < CANVAS.offsetWidth) && (y < CANVAS.offsetHeight))) {
	drawCircleAtPoint(x, y);
    }
});

// catch the LEFT button event
document.getElementById("leftButton").addEventListener("click", function() {
    moveCanvas(-10);
});

// catch the RIGHT button event
document.getElementById("rightButton").addEventListener("click", function() {
    moveCanvas(10);
});

// catch the EXPORT button event
document.getElementById("exportButton").addEventListener("click", function() {
    document.getElementById("hiddenP").style.display = "inline";
    console.log(circles);
});

function	updateCursorPosition(e) {
    cursX = e.pageX;
    cursY = e.pageY;
}
