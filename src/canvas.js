function	moveCanvas(value) {
    canvasLocation += value;
    clearCanvas();
    drawAxes();
    drawCircles();
}

function	clearCanvas() {
    context.clearRect(0, 0, CANVAS.offsetWidth, CANVAS.offsetHeight);
}
