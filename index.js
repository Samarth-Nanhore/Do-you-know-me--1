var readlineSync=require('readline-sync');
var userName=readlineSync.question("What's your name ? ");
console.log("\nWelcome "+userName+" \nLets see..how well you know Samarth?🤠 ")
//count score 
var countScore=0 

//check if user answer is valid or not
function checkAnswer(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()==answer.toUpperCase()) 
  {
    console.log("Arigato! You're my true friend 🥺 ");
    countScore++;
    console.log("Current score: "+countScore);
  }
  else
    console.log("Better luck next time 😝");
console.log("---------------------");
}

var questionList=[
  {
    question : "\nWho's my favourite writer ",
    answer :"Ruskin Bond"
  },
  {
    question : "\nWhich one is my favourite anime? ",
    answer :"Naruto"
  },
  {question : "\nWhat's my all time favourite snacks? ",
    answer :"Bakarwadi"},
    {question : "\nChoose one: cooking?, football?, skethching? ",
    answer :"sketching"},
    {question : "\nIn which language I mostly do code? ",
    answer :"JavaScript"}

]

var highScore=[{
  Name:"Rahul",
  score:5
},{
  Name:"Yadnesh",
  score:3
}]


for(var i=0;i<questionList.length;i++)
{
  checkAnswer(questionList[i].question,questionList[i].answer);
}


console.log("\nAll right,You're SCORED  "+countScore);
console.log("------");
console.log("\nName of High scorer:\n ")
for(var i=0;i<highScore.length;i++)
{
  console.log("Name: "+highScore[i].Name+"\nscore: "+highScore[i].score);
}