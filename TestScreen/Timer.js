//document.getElementsByClassName("submitBtnClass").addEventListener("click",startCounter());
//window.addEventListener("click",startCounter());
 //setTimeout(function(){ alert("Hello"); }, 3000);
   counter = JSON.parse(localStorage.timeLimit);
  //  counter=crudOperations.timeLimit;

  var myvar;
    function startCounter(){
        
    myvar=      setInterval(descFunc, 1000);
    }
  function stopTimer(){

   clearInterval(myvar);
   }
    function descFunc() {

     counter--;
       
     document.getElementById("timer").innerHTML = counter+" seconds";
    //  localStorage.count=counter;
        if(counter==0)
            {clearInterval(myvar);
                var ArrayObject = JSON.parse(localStorage.QuestionsList);
              getAnswer(ArrayObject);
             document.getElementById("BtnId").disabled=true;
            }
     
      
     
 }
    
