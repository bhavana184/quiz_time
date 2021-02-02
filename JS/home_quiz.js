//app.js PART ADDED
function populate() {
    if(quiz.isEnded()) {
        showScores();//show results
    }
    else {
        // show question
        var element = document.getElementById("question_h1");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    /**/updateScores();/**/ //update score after each question
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {//show on which question is user currently on
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    /*var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;*/
    showTime();
    location.replace("results.html");
};
/**/

function showTime() {//to show results on the basis of time taken
  var time = document.getElementById("timer_h1").innerText.split(":").map(function(val){ return parseInt(val)});
  //alert("YOU time: "+time[0]+"."+time[1]+"secs");
  var str=time[0]+"."+time[1];
  var flo=parseFloat(str);
  //alert("YOU time: "+time[0]+"."+time[1]+"secs"+ " flo= "+flo);
  var variableOne = 15-flo;//to calculate time spent in quiz
  window.localStorage.setItem("v1LocalStorage", variableOne);

};
/**/
/*This also worked by passing parameter as url
  function showTime() {
  var url=window.location;
  //alert(url);
  var url1=new URL(url);
  //alert(url1);
  url1.searchParams.append('x',42);
  //url.searchParams.set('x', 42);
  //alert(url1);
  //alert(url1.searchParams.get('x'));
  var variableOne = url1.searchParams.get('x');
  window.localStorage.setItem("v1LocalStorage", variableOne);
}*/
/**/
/**/
function updateScores() {
    s= quiz.score + " / 3";
    var element = document.getElementById("score_h1");
    element.innerHTML = s;

};
/**/

/**/
//CREATE RANDOM QUESTIONS
var questions=[];
function generate() {
  var int1=Math.floor(Math.random()*10)-1;
  var int2=Math.floor(Math.random()*10)-1;

  var operators = ['+','-','*','/'];
  op=operators[Math.floor(Math.random()*4)];

  var ques=""+int1 + " " + op + " " + int2 + " = ? ";
  var qanswer = eval(int1 + op + int2);
  qanswer=parseFloat(qanswer.toFixed(2));

  opt1=Math.floor(Math.random()*10)-1;
  opt2=Math.floor(Math.random()*10)-1;
  opt3=qanswer;
  opt4=Math.floor(Math.random()*10)-1;
  var options =[opt1,opt2,opt3,opt4]; //for shuffling options each time
  options.sort(() => Math.random() - 0.5);//shuffle array
  var option_array=[options[0],options[1],options[2],options[3]];

  return [ques, option_array,qanswer];
}

  var ques_receiver = generate();
  //alert(""+ques_receiver[0]+" "+ques_receiver[1]+" "+ques_receiver[2]);
  questions[0]=new Question(ques_receiver[0], ques_receiver[1], ques_receiver[2]);
  ques_receiver = generate();
  questions[1]=new Question(ques_receiver[0], ques_receiver[1], ques_receiver[2]);
  ques_receiver = generate();
  questions[2]=new Question(ques_receiver[0], ques_receiver[1], ques_receiver[2]);

/**/
var quiz = new Quiz(questions);
populate();


/*COUNTDOWN TIMER*/
var timeLeft = 15;
var elem = document.getElementById('timer_h1');
var timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
    	if(timeLeft>=10) elem.innerHTML = '00 : '+timeLeft;
       else  elem.innerHTML = '00 : 0'+timeLeft;
        timeLeft--;
    }
}
function doSomething() {
  //  alert("Time Over!!");
    location.replace("game_over.html");
}

/*COUNTDOWN TIMER code ends*/

/*generate random time for users*/
/*
  //results.js file
*/
