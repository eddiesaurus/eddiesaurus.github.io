var z = false; // Indicates that confetti() has not yet run.

function showDetails() {
	var x = document.getElementById("card");
	var y = document.getElementById("details");
	
	if (z !== true) {
		x.style.backgroundPosition = "100% 0"; // Change the sprite for the card div.
		y.style.display = "block"; // Show the details div.
		z = true;	
	} else {
		y.scrollIntoView({
			behavior: `smooth`,
		}); // Smoothly scroll to details div.
	}
}