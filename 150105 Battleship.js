var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Klara, sikta och skjut! Mata in en siffra från 0 till 6");
    if (guess < 0 || guess > 6) {
        alert("Ett giltigt nummer, tack!");
    } else {
guesses = guesses + 1;

if (guess == location1) {
    alert("TRÄFF!");
    hits = hits + 1;
} else if (guess == location2) {
    alert("TRÄFF!");
    hits = hits + 1;    
} else if (guess == location3) {
    alert("TRÄFF!");
    hits = hits + 1;
} else {
    alert("MISS!");
}
if (hits == 3) {
    isSunk = true;
    alert("Mitt skepp är sänkt!");
}
            }
}
var stats = "Det tog " + guesses + "gissningar att sänka mitt skepp, " +
    "vilket betyder att din träffsäkerhet var " + (3/guesses);
alert(stats);