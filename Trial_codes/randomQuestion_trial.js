/*var minimum = 1;
var maximum = 100;
var int1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
var int2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;*/
var int1=Math.floor(Math.random()*100)-1;//to generate number in range 1 to 100
var int2=Math.floor(Math.random()*100)-1;
/**/
var operators = ['+','-','*','/'];
op=operators[Math.floor(Math.random()*4)];
/**/
//document.getElementById('question_h1').innerHTML = int1 + " " + op + " " + int2 + " = ? ";
var ques=""+int1 + " " + op + " " + int2 + " = ? ";
var qanswer = eval(int1 + op + int2);
qanswer=parseFloat(qanswer.toFixed(2));
/**/
opt1=Math.floor(Math.random()*100)-1;
opt2=Math.floor(Math.random()*100)-1;
opt3=qanswer;
opt4=Math.floor(Math.random()*100)-1;
var options =[opt1,opt2,opt3,opt4]; //for shuffling options each time
options.sort(() => Math.random() - 0.5);//shuffle array
/*document.getElementById('choice0').innerHTML=options[0];
document.getElementById('choice1').innerHTML=options[1];
document.getElementById('choice2').innerHTML=options[2];
document.getElementById('choice3').innerHTML=options[3];*/
var option_array=[options[0],options[1],options[2],options[3]];
