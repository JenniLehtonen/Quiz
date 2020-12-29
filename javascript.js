
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
      var element1 = document.getElementById("b1");
      var element2 = document.getElementById("b2");
      var element3 = document.getElementById("b3");
      var element4 = document.getElementById("b4");
      element1.classList.remove("correctAnswer");//Remove classes "correctAnswer" and "wrongAnswer" and add the original class
      element1.classList.remove("wrongAnswer");
      element1.classList.add("optionButton");
      element2.classList.remove("correctAnswer");
      element2.classList.remove("wrongAnswer");
      element2.classList.add("optionButton");
      element3.classList.remove("correctAnswer");
      element3.classList.remove("wrongAnswer");
      element3.classList.add("optionButton");
      element4.classList.remove("correctAnswer");
      element4.classList.remove("wrongAnswer");
      element4.classList.add("optionButton");

    document.getElementById("questionNumber").innerHTML = questionIndex + 1 + " of " + questions.length;
    document.getElementById("question").innerHTML=questions[questionIndex]; //Shows the questions
  
    document.getElementById("b1").innerHTML=options[questionIndex].a;  
    document.getElementById("b2").innerHTML=options[questionIndex].b;
    document.getElementById("b3").innerHTML=options[questionIndex].c;
    document.getElementById("b4").innerHTML=options[questionIndex].d;
    
    }
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
    if (e.target.innerText == answers[questionIndex]){
      var element = document.getElementById(e.target.id);
      element.classList.remove("optionButton");
      element.classList.add("correctAnswer"); //if the answer is correct --> add a new class
      score++;
    } else{
      var element = document.getElementById(e.target.id);
      element.classList.remove("optionButton");
      element.classList.add("wrongAnswer"); //if the answer is wrong --> add a new class
    }
  }

  function playAgain(){
    document.getElementById("newQuestionButton").innerHTML="New question";
    document.getElementById("score").style.display = "none"; //hide the score
    document.getElementById("tryAgain").style.display = "none"; //hide "try again" button
    score = 0;
    questionIndex = 0;
    var x = document.getElementsByClassName("questionAndOptions"); //show question and options again
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }

    var element1 = document.getElementById("b1");
      var element2 = document.getElementById("b2");
      var element3 = document.getElementById("b3");
      var element4 = document.getElementById("b4");
      element1.classList.remove("wrongAnswer"); //Remove classes "correctAnswer" and "wrongAnswer" and add the original class
      element1.classList.remove("correctAnswer");
      element1.classList.add("optionButton");
      element2.classList.remove("wrongAnswer");
      element2.classList.remove("correctAnswer");
      element2.classList.add("optionButton");
      element3.classList.remove("wrongAnswer");
      element3.classList.remove("correctAnswer");
      element3.classList.add("optionButton");
      element4.classList.remove("wrongAnswer");
      element4.classList.remove("correctAnswer");
      element4.classList.add("optionButton");

    document.getElementById("questionNumber").innerHTML = "1 of " + questions.length;
    document.getElementById("question").innerHTML=questions[0]; //reset the index of the questions

    document.getElementById("b1").innerHTML=options[0].a;  //show the first options
    document.getElementById("b2").innerHTML=options[0].b;
    document.getElementById("b3").innerHTML=options[0].c;
    document.getElementById("b4").innerHTML=options[0].d;
  }

  