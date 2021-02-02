var vOneLS = window.localStorage.getItem("vOneLocalStorage");
var variableName1 = vOneLS;
document.getElementById('winner_name').innerHTML=variableName1;

var vTwoLS = window.localStorage.getItem("vTwoLocalStorage");
var variableTime1 = vTwoLS;
document.getElementById('winner_time').innerHTML=variableTime1 +"\tsecs";
