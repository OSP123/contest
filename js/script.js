// Can also be included with a regular script tag

var options = {
  strings: ["<h3>++INCOMING TRANSMISSION++</h3>","<h3>SOURCE: Roboute Gulliman,  Lord Commander and Imperial Regent, the living voice of the Emperor.</h3>", "<h3>AUTHORIZATION: [INQUISITOR GREYFAX]</h3>", "<h3>++ACCESS GRANTED—EYES ONLY++</h3>", "<h3>BEGIN CODED MESSAGE:</h3>"],
  typeSpeed: 40
}

var typed = new Typed(".element", options);

var currentDate = new Date();
				// Set some date in the future. In this case, it's always Jan 1
var futureDate  = new Date("October 22, 2017 11:59:59");
// Calculate the difference in seconds between the future and current date
var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
// Instantiate a coutdown FlipClock
clock = $('.your-clock').FlipClock(diff, {
	clockFace: 'DailyCounter',
	countdown: true
});