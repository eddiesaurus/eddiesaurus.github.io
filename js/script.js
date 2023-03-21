/** The showDetails() script sets the id="balloon" display to none and the id="details" display to block. **/
function showDetails() {
	var x = document.getElementById("details");
	if (x.style.display !== "block") {
		x.style.display = "block";
	}
	var y = document.getElementById("balloon");
	if (y.style.display !== "none") {
		y.style.display = "none";
	}
}