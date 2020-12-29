
document.querySelectorAll(".optionButton").forEach(button => {  // when the user clicks some answer, checkAnswer function is called and it checks if the user has chosen the correct answer
    button.addEventListener('click', checkAnswer);
  });
document.getElementById("tryAgain").addEventListener('click', playAgain);


    var score = 0;   //The score increases if the user chooses a correct answer
    var questionIndex = 0; 

    var questions = [];
    var answers = [];
    var options = [];
    for (i = 0; i < quiz.length; i++) {
    questions.push(quiz[i].question);
    answers.push(quiz[i].answer);
    options.push(quiz[i].options);
  }
  
  document.getElementById("question").innerHTML=questions[0];  //show the question
  
  document.getElementById("b1").innerHTML=options[0].a;  //show the options
  document.getElementById("b2").innerHTML=options[0].b;
  document.getElementById("b3").innerHTML=options[0].c;
  document.getElementById("b4").innerHTML=options[0].d;
  
  function newQuestion(){ 
    questionIndex++; //The question index increases when the user clicks "New question" button --> The question changes
    if(questionIndex > 3) { //If there is the last question, change button text to "Show the result"
      document.getElementById("newQuestionButton").innerHTML="Show the result";
    }
    if(questions[questionIndex]!=undefined){
      document.querySelectorAll(".optionButton").forEach(button => { 
      button.style.backgroundColor="white";
    });

    document.getElementById("questionNumber").innerHTML = questionIndex + 1 + " of " + questions.length;
    document.getElementById("question").innerHTML=questions[questionIndex]; //Shows the questions
  
    document.getElementById("b1").innerHTML=options[questionIndex].a;  
    document.getElementById("b2").innerHTML=options[questionIndex].b;
    document.getElementById("b3").innerHTML=options[questionIndex].c;
    document.getElementById("b4").innerHTML=options[questionIndex].d;
    
    } 
    /*if(questions[questionIndex]<5) {
        console.log("questionIndex is under 5")
    }*/
    else{  //When there are no questions left, question and answer buttons are hidden and the results and try again button are shown
    var x = document.getElementsByClassName("questionAndOptions");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById("score").style.display = "block";
    document.getElementById("score").innerHTML = "Your score is: " + score;
    document.getElementById("tryAgain").style.display = "block";
    }
  }

  function checkAnswer(e){
    console.log(answers[questionIndex])
    console.log(e.target.innerText);
    if (e.target.innerText == answers[questionIndex]){
      document.getElementById(e.target.id).style.backgroundColor= "rgba(36, 219, 149, 0.84)";
      console.log("oikein");
      score++;
      console.log(score);
    } else{
      document.getElementById(e.target.id).style.backgroundColor= "rgba(219, 45, 36, 0.84)";
      document.getElementById("newQuestionButton").style.backgroundColor= "white";
      console.log("väärin");
    }
  }

  function playAgain(){
    document.getElementById("newQuestionButton").innerHTML="New question";
    document.getElementById("score").style.display = "none";
    document.getElementById("tryAgain").style.display = "none";
    score = 0;
    questionIndex = 0;
    console.log(questionIndex);
    var x = document.getElementsByClassName("questionAndOptions");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
    document.querySelectorAll(".optionButton").forEach(button => { 
      button.style.backgroundColor="white";
    });
    document.getElementById("questionNumber").innerHTML = "1 of " + questions.length;
    document.getElementById("question").innerHTML=questions[0];

    document.getElementById("b1").innerHTML=options[0].a;  
    document.getElementById("b2").innerHTML=options[0].b;
    document.getElementById("b3").innerHTML=options[0].c;
    document.getElementById("b4").innerHTML=options[0].d;
  }

  