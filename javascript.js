
document.querySelectorAll(".optionButton").forEach(button => {  //kun painetaan vastausvaihtoehtoa, tutkitaan, onko vastaus oikein
    button.addEventListener('click', checkAnswer);
  });
document.getElementById("tryAgain").addEventListener('click', playAgain);


    var score = 0;   //Score kasvaa, jos vastataan oikein
    var questionIndex = 0; //Question index kasvaa jokaisella vastauskerralla

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
  
  function newQuestion(){ //tässä questionIndex kasvaa, kun painetaan vastausvaihtoehtoa --> kysymys vaihtuu
    questionIndex++;

  if(questions[questionIndex]!=undefined){
    document.querySelectorAll(".optionButton").forEach(button => { 
    button.style.backgroundColor="white";
  });

    document.getElementById("questionNumber").innerHTML = questionIndex + 1 + " of " + questions.length;
  
    console.log("QuestionIndex: " + questionIndex);
    document.getElementById("question").innerHTML=questions[questionIndex]; //MIKÄ TÄMÄ ON?
  
    document.getElementById("b1").innerHTML=options[questionIndex].a;  
    document.getElementById("b2").innerHTML=options[questionIndex].b;
    document.getElementById("b3").innerHTML=options[questionIndex].c;
    document.getElementById("b4").innerHTML=options[questionIndex].d;
    
    } else{
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

  