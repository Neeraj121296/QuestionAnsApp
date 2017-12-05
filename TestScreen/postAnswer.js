window.addEventListener("load", bindEvents);

var myVar;
var counter=0;
function bindEvents() {
   //document.getElementById("startTest").addEventListener("click", loadQuestion);
 document.getElementById("startTest").onclick=function(){loadQuestion();
                                                         startCounter();
                                                        
                                                        document.getElementById("startTest").disabled=true;}
}

function loadQuestion() {

    if (localStorage) {
        if (localStorage.QuestionsList) {
             
            var ArrayObject = JSON.parse(localStorage.QuestionsList);
            printAnswer(ArrayObject);
            
     //       console.log(ArrayObject);
            //crudOperations.QuestionsList = JSON.parse(localStorage.QuestionsList);
            //printTable();
            //   answers.appendChild(answerObj);
        } else {
            alert("nothing to load...");
        }
    } else {
        alert("outdated browser...");
    }

}



function printAnswer(ArrayObject) {
  
   

    for (i = 0; i < ArrayObject.length; i++) {
         var answers = document.getElementById("loadQuestion");
        var answerObj = document.createElement("span");
  
    
        myAnswer = document.createElement("textarea");
        // myAnswer.setAttribute('id','myAnswerId');
        myAnswer.id = "IdAnswer" + i;
        myAnswer.setAttribute('placeholder', 'write your Answer');


        answerObj.innerHTML = "</br>" + "<b>" + "Question-" + ArrayObject[i].id + "&nbsp;" + "<i>" + ArrayObject[i].value + "</i>" + "</b>" + "</br>" +
            "b.) " + ArrayObject[i].option1 + "</br>" + "b.) " + ArrayObject[i].option2 + "</br>" + "c.) " + ArrayObject[i].option3 + "</br>" + "d.) " + ArrayObject[i].option4 + "</br>";
        answers.appendChild(answerObj);
      
        answers.appendChild(myAnswer);


    }
   
   
    submitTest(ArrayObject);
}

function submitTest(ArrayObject) {
    var answers = document.getElementById("loadQuestion");

    submitBtn = document.createElement("button");
    submitBtn.className="submitBtnClass";
    submitBtn.innerHTML = "submit test";
    submitBtn.id="BtnId";
   // submitBtn.setAttribute=("submitBtnId",ArrayObject.id);
    answers.appendChild(submitBtn);
submitBtn.onclick=function(){getAnswer(ArrayObject);
                            stopTimer();
                            submitBtn.disabled=true;
                             
                            }
}


function getAnswer(ArrayObject) {
    for (i = 0; i < ArrayObject.length; i++) {
        var answerGiven = document.getElementById("IdAnswer" + i).value;
           console.log(answerGiven);
          crudOperations.addcheckAnswer(answerGiven);
        
     var lastcheckAnswer=crudOperations.checkanswerList[crudOperations.checkanswerList.length - 1];
        console.log(lastcheckAnswer);
    }
   
answerSave();
}
function answerSave(){
	if(localStorage){
        localStorage.checkAnswerList=JSON.stringify(crudOperations.checkanswerList);
	
		alert("Record Saved....");
	}
	else{
		alert("outdated browser...");
	}
     MatchOperation.loadAnswer();
    showResult();
}
function showResult(){

    var text=document.getElementById("totalScore");
    var textObj=document.createElement("span");
    
    textObj.innerHTML= MatchOperation.count;
    text.appendChild(textObj);
    
}
