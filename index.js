var readlineSync = require("readline-sync");
var chalk = require('chalk');

var score = 0;
console.log(chalk.green.bold("Welcome to Varun's quiz !\n"));
var userName = readlineSync.question(chalk.cyan("What is your name?\n"));

console.log("Welcome " + chalk.yellow(userName) + " Lets see how much you know me !\n");

//play function
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  console.log(" ");
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Your Answer: "+ userAnswer);
    console.log(chalk.green("right!"));
    score = score + 1;
  }
  else{
    console.log("Your Answer: "+ userAnswer);
    console.log(chalk.red("wrong!"));
  }
  console.log("Current Score: ",score);
    console.log(chalk.magentaBright("--------------------------------\n"));
}

var questions = [{
  question: "Q1) What is my favourite Color?\na) Blue\nb) Red\nc) Pink\nd) Purple \n",
  answer: "a"
},{
  question: "Q2) Where do I live?\na) Banglore\nb) Delhi\nc) Lucknow\nd) Gorakhpur\n",
  answer: "d"
},{
  question: "Q3) What do I like to drinks?\na) Coffee\nb) Tea\nc) Cold Drink\nd) Milk Shake\n",
  answer: "a"
},{
  question: "Q4)Which IDE I like most?\na) NetBeans\nb) Visual Studio\nc) IntelliJ\nd) MonoDevelop\n",
  answer: "b"
},{
  question: "Q5) Which season I Like most?\na) Summer\nb) Winter\nc) Autumn\nd) Spring\n",
  answer: "b"
},{
  question: "Q6) My favourite subject in School days?\na) Chemistry\nb) Physics\nc) Mathematics\nd) Biology\n",
  answer: "b"
},{
  question: "Q7) Which is my favourite chinese food?\na) Chowmein\nb) Spring Roll\nc) Momos\nd) Panner Chilly\n",
  answer: "d"
},{
  question: "Q8) What do I love to do?\na) Web-Development\nb) Machine Learning\nc) Competitive Programming\nd) UX/UI Design\n",
  answer: "a"
},{
  question: "Q9) Which company laptop do I use?\na) Acer\nb) Apple\nc) Hp\nd) Lenovo\n",
  answer: "a"
},{
  question: "Q10) What I do to take rest ?\na) Use Mobile\nb) Eat\nc) Sleep\nd) Go Outside\n",
  answer: "c"
}];

//loop
for(var i=0; i<questions.length; i++){
  var currentQuestion =questions[i];
  play(currentQuestion.question, currentQuestion.answer); 
}

console.log(chalk.yellow("You SCORED " + score + " out of 10"));
if(score >= 7){
  console.log(chalk.green.italic("WoW! you know me well 🤩🤗"));
}
else{
  console.log("Ohh..., you need to know me more 😐😐");
}