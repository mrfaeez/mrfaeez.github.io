function onSubmit(){
  var score = 0;
  var numOfQuestion = 5;
  var ansArr =['c','c','b','a','a'];

  var Q1 = document.forms['quiz']['Q1'].value;
  var Q2 = document.forms['quiz']['Q2'].value;
  var Q3 = document.forms['quiz']['Q3'].value;
  var Q4 = document.forms['quiz']['Q4'].value;
  var Q5 = document.forms['quiz']['Q5'].value;

  for(var i = 1;i <= numOfQuestion; i++){
    if(eval('Q' + i) == ansArr[i-1]){
      score++;
    }
  }

  results2.innerHTML="<h2>You scored " + score + " points out of " + numOfQuestion + "</h2>";

  for(var i = 1; i <= numOfQuestion;i++){
    if(eval('Q' + i) == ''){
      alert("You missed question number " + i);
      results2.innerHTML="<h2>Please answer all question...!</h2>";
      break;
        }
      }
  return false;
  }
