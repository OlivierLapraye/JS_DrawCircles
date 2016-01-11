// draw a circle to the x, y position
function	drawCircleAtPoint(x, y) {
    if ((unionNbr === 0) || (isInFirstUnion(x - canvasLocation, y) === true)){
	circles.push({"x" : x - canvasLocation, "y": y, "union": 1});
	unionNbr = 1;
	drawCircleOnCanvas(x, y, 1);
    }
    else {
	unionNbr++;
	circles.push({"x" : x - canvasLocation, "y": y, "union": unionNbr});
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
	drawCircleOnCanvas(circles[i].x + canvasLocation, circles[i].y, circles[i].union);
    }
}
