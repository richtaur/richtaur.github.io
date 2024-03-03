// Get a random subtitle
const subtitles = [
	"game developer",
	"let's make games",
	"the galaxy is at peace",
	"words about games",
	"richtaur.com",
	'"rick tore"',
];
const choice = subtitles[Math.floor(Math.random() * subtitles.length)];

// Show the subtitle
const subtitle = document.getElementById("subtitle");
subtitle.innerHTML = choice;