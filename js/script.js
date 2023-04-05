var z = false; // Indicates that confetti() has not yet run.

function showDetails() {
	var x = document.getElementById("card");
	var y = document.getElementById("details");
	
	var a = document.getElementById("cardBefore");
	var b = document.getElementById("cardAfter");
	
	if (z !== true) {
		x.style.backgroundPosition = "100% 0"; // Change the sprite for the card div.
		y.style.display = "block"; // Show the details div.
		a.style.display = "none"; // Hide the cardBefore div.
		b.style.display = "block"; // Show the cardAfter div.
		z = true;	
	} else {
		y.scrollIntoView({
			behavior: `smooth`,
		}); // Smoothly scroll to details div.
	}
}