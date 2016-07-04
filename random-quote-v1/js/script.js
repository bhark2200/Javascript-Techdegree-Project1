
// Array with quote objects.
var randomQuote = [
	{
		quote :"No journey is to great, when one finds what he seeks.",
		source: "Nietzsche"
	},
	
	{
		quote:"Play is the work of the child",
		source: "Maria Montessori"
	},
	
	{
		quote:"Play is the highest form of research",
		source: "Albert Einstien",
		tag: "Famous"
	},
	
	{
		quote:"Wherever you go, go with all your heart",
		source: "Confucius"
	},
	{
		quote:'"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world."',
		source: "J.R.R Tolkien",
		citation: "The Hobbit",
		year: "1937",
		tag: "A Fantasy novel"
	},
	
	{
		quote: '"There is no foreign land; It is the traveler only that is foreign"',
		source: "Robert Louis Stevenson",
		citation: "The Silverado Squatters",
		year: "1883",
		tag: "A Travel Memoir"
	},
	
	{
		quote:'"No thief, however skillful, can rob one of knowledge, and that is why knowledge is the best and safest treasure to acquire"',
		source: "L. Frank Brown",
		citation: "The Lost Princess of OZ",
		year: "1917",
		tag: "A Fantasy Novel"
	},
	
	{
		quote:'"Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man."',
		source: "Homer",
		citation: "The Odyssey",
		tag: "A Classic"
	},
	
	{
		quote:'"You should bring something into the world that wasn&#39t in the world before.  It doesn&#39t matter what that is. It doesn&#39t matter if it&#39s a table or a film or gardening - everyone should create. You should do something then sit back and say &#39I did that.&#39"',
		source: "Ricky Gervais",
		tag:"About Life"
	},
	
	{
		quote:"For what you see and hear depends a good deal on where you are standing: it also depends on what sort of person you are",
		source: "C.S. Lewis",
		citation: "The Magician's Nephew",
		year: "1955",
		tag: "A Fantasy Novel"
	}
	
                                                                              
];
// creates an array to put the random numbers in to check and make sure they only appear once per cycle.
var dummyArray = [];

// A function to run the printQuote function once every 30 seconds.
function changeQuoteAuto() {
	var intervelId = setInterval(printQuote, 30000);
	return intervelId;
}
//Puts out a random number
function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * randomQuote.length);
	return randomNumber;
}  

// turns the random number into the quote Also checks to make sure a quote is called only once per cycle.
function getRandomQuote() {
	var randomNumber = getRandomNumber();
	var getQuote;
	if(dummyArray.length === randomQuote.length) {
		dummyArray.length = 0;
	}
	
	while(dummyArray.indexOf(randomNumber) !== -1) {
		randomNumber = getRandomNumber();
	}
	
	dummyArray.push(randomNumber);
	getQuote = randomQuote[randomNumber];
	return getQuote;
}

//Creates a random color for the background.
function randomColor() {
	var color;
	var rgbColor = 'rgb(';
	
	for(var i = 0; i < 3; i++) {
		color = Math.floor(Math.random() * 256);
		if(i === 2) {
			rgbColor += color;
		}else {
		rgbColor += color + ', ';
		}
	}
	
	rgbColor += ')';
	return rgbColor;
	}
	


// makes the html that is going to be put up on the page and saves it in html.
function printQuote() {
	
	var quotes = getRandomQuote();
	var html = "";
	var backgroundColor = randomColor();
	for (var prop in quotes) {
		if ( prop === "quote" || prop === "source"){
			html +=  '<p class="';
		} else {
			html += '<span class="';
		}
		html +=  prop;
		html += '">';
		html += quotes[prop];
		if ( prop === "quote") {
			html += '</p>';
		}
		}
		html += '</p>';
		
	document.body.style.background = backgroundColor;
	document.getElementById('quote-box').innerHTML = html;
	return html;
}

// Calls the changeQuoteAuto function.
changeQuoteAuto();

// event listener to respond to clicks on the button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
