window.addEventListener("load",bindEvents);
function bindEvents(){
    

   document.getElementById("submitBt").addEventListener("click", doPost);
document.getElementById("saveBtn").addEventListener("click",save);
 document.getElementById("loadBtn").addEventListener("click",load);  
     
}

function doPost(){
    var questValue=document.getElementById("quest").value;
     var option1=document.getElementById("option1").value;
     var option2=document.getElementById("option2").value;
     var option3=document.getElementById("option3").value;
     var option4=document.getElementById("option4").value;
    var answerValue=document.getElementById("answerText").value;
    var timeValue=document.getElementById("timeLimit").value;
    console.log(questValue);
      if (questValue == "") {
        
        alert("Post Your Question ");
    } 
  
    
    else 
    
    {   
        console.log(questValue);
       crudOperations.timeLimit=timeValue*60;
        crudOperations.addAnswer(answerValue);
        crudOperations.addQuestion(questValue,option1,option2,option3,option4);
     var lastAnswer=crudOperations.AnswerList[crudOperations.AnswerList.length - 1];
        var lastAdded = crudOperations.QuestionsList[crudOperations.QuestionsList.length - 1];
       
       printRecord(lastAdded);
       
 console.log(lastAnswer);
         console.log(lastAdded);

    }
    
    
    
}
function save(){
	if(localStorage){
        localStorage.AnswerList=JSON.stringify(crudOperations.AnswerList);
		localStorage.QuestionsList = JSON.stringify(crudOperations.QuestionsList);
        localStorage.timeLimit=JSON.stringify(crudOperations.timeLimit);
		alert("Record Saved....");
	}
	else{
		alert("outdated browser...");
	}
}

function load(){
	if(localStorage){
		if(localStorage.QuestionsList){
			crudOperations.QuestionsList = JSON.parse(localStorage.QuestionsList);
			printTable();
		}
		else{
			alert("nothing to load...");
		}
	}
	else{
		alert("outdated browser...");
	}
}


function printTable(){

	document.getElementById("Questions").innerHTML="";
	crudOperations.QuestionsList.forEach((postObject)=>printRecord(postObject));
}





function printRecord(lastAdded){
  //  var radioInput = document.createElement('input');
//radioInput.setAttribute("question-id",lastAdded.id);
//radioInput.setAttribute('type', 'radio');
    
//radioInput.setAttribute('name', name);
// var x=   lastAdded.option1.appendChild(radioInput);
    //  lastAdded.option2.appendChild(radioInput);
    //  lastAdded.option3.appendChild(radioInput);
      //lastAdded.option4.appendChild(radioInput);
    
  var tbody = document.getElementById("Questions");
    var QuesObj=document.createElement("span");
    QuesObj.innerHTML= "<b>"+"Question-"+lastAdded.id + "&nbsp;" +"<i>"+lastAdded.value +"</i>"+ "</b>"+"</br>"
   +"a.) "+lastAdded.option1+"</br>"+"b.) "+lastAdded.option2+"</br>"+"c.) "+lastAdded.option3+"</br>"+"d.) "+lastAdded.option4+"</br>";
    tbody.appendChild(QuesObj);
  //  var tr = tbody.insertRow();
    //cell = tr.insertCell(0);
    //cell.innerHTML= "<b>"+"Question-"+lastAdded.id + "&nbsp;" +"<i>"+lastAdded.value +"</i>"+ "</b>"+"</br>"+
    //"<input type="radio">"+lastAdded.option1;
    
    
    

}