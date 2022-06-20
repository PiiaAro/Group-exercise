var readlineSync = require("readline-sync");

var username = readlineSync.question("Hei! Kerro nimesi? ");

console.log("\n");

console.log("Tervetuloa SUPERKYSELYYN, " + username + "!");

var score = 0;
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log("OIKEIN! ");
    score++;
  } else {
    console.log("Voi ei, väärin meni! ");
    score--;
  }
  console.log("Pisteesi on ", score);
  console.log("-------------------");
}

//questions
var questions = [
  { question: "Mikä on paras vuodenaika?", answer: "kesä" },
  { question: "Mikä on paras jäätelömaku?", answer: "mansikka" },
  { question: "Entäpä, mikä on paras pehmismaku?", answer: "vanilija" },
];

//LOOP
for (var i = 0; i < questions.length; i++) {
  var currentq = questions[i];
  quiz(currentq.question, currentq.answer);
}

//To display the final score.
console.log("HIENOA! KESÄKYSELYN TULOKSESI ON: " + score + "/3");
