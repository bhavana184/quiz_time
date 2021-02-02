/*generate random time for users*/
/*
  var maximum=0.15;
  var minimum=0.01;
  var t3 = parseFloat(((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2));//time of "YOU"
  */
  var v1LS = window.localStorage.getItem("v1LocalStorage");
  var variableTwo = v1LS;
  var t3=variableTwo;//store time of current user "YOU"
  //alert(t3);

  var maximum=14;
  var minimum=1;
  var t2 = parseFloat(((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2));
  var t1 = parseFloat(((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2));

  //maximum=0.15;
  //minimum=t3;
  var t4 = parseFloat(((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2));
  var t5 = parseFloat(((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2));
  var t6 = parseFloat(((Math.random() * (maximum - minimum + 1)) + minimum).toFixed(2));


  var ut1= document.getElementById("user1_t1");
  var ut2=  document.getElementById("user2_t2");
  var ut3=  document.getElementById("user3_t3");
  var ut4=  document.getElementById("user4_t4");
  var ut5=  document.getElementById("user5_t5");
  var ut6= document.getElementById("user6_t6");
  ut1=t1;
  ut2=t2;
  ut3=t3;
  ut4=t4;
  ut5=t5;
  ut6=t6;

  var un1= document.getElementById("user1_name");
  var un2= document.getElementById("user2_name");
  var un3= document.getElementById("user3_name");
  var un4= document.getElementById("user4_name");
  var un5= document.getElementById("user5_name");
  var un6= document.getElementById("user6_name");
  un1="User1";
  un2="User2";
  un3="YOU";
  un4="User4";
  un5="User5"
  un6="User6";

  function sortByTime(arr) {
    arr.sort((a, b) => a.time - b.time);
  }

  var obj1 =  { name: un1, time: ut1};
  var obj2 =  { name: un2, time: ut2};
  var obj3 =  { name: un3, time: ut3};
  var obj4 =  { name: un4, time: ut4};
  var obj5 =  { name: un5, time: ut5};
  var obj6 =  { name: un6, time: ut6};
  var obj_arr = [ obj1,obj2,obj3,obj4,obj5,obj6];
  sortByTime(obj_arr);
  //alert(obj_arr[0].name);

  //TRAVERSE THOUGH EACH USER ID ELEMENT IN results.html
  for(var i=0;i<6;i++){
    document.getElementById("user"+(i+1)+"_t"+(i+1)).innerHTML=obj_arr[i].time + " secs";
  }
  //TRAVERSE THOUGH EACH USER NAME ELEMENT IN results.html
  for(var i=0;i<6;i++){
  document.getElementById("user"+(i+1)+"_name").innerHTML=obj_arr[i].name;
  }

/* //Problem solved using localStorage, now no need of below code
   function showWinner(name,time) {
     alert("\t\t\t\tCONGRATULATIONS!!\t\t\t\t"+"\n\n \t\t\t\tWinner name:\t"+name+"\t\t\t\t"+"\n \t\t\t\tTime taken:\t"+time+"\tsecs\t\t");
   }
   showWinner(obj_arr[0].name,obj_arr[0].time);
*/
   /**/
   //TO SHOW WINNER NAME AND HIS TIME ON congratulations.html page
   var variableName = obj_arr[0].name;
   window.localStorage.setItem("vOneLocalStorage", variableName);
   var variableTime = obj_arr[0].time;
   window.localStorage.setItem("vTwoLocalStorage", variableTime);
   /**/
