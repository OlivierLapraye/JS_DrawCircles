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
