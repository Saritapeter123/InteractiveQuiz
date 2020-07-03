// Question array.
var questions = [
  { q: "DOM stands for: Document Object Model?", a: "t" },
  { q: "Punctuation does not matter in Coding.", a: "f" },
  { q: "HTML stands for: HyperText Markup Language?", a: "t" },
  { q: "Do hummingbirds like to eat burgers?", a: "f" }
];

// Start the game with a score of 0.
var score = 0;

// Loop over every question. 
for (var i = 0; i < questions.length; i++) {
  // Display question and ask for Ok/Cancel 
  var answer = confirm(questions[i].q);

  // true or false
  if ((answer === true && questions[i].a === "t") ||
    (answer === false && questions[i].a === "f")) {
    // increase score
    score++;
  }
}
// total at the end.
alert("You got " + score + "/" + questions.length);
