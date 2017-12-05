window.addEventListener("load",bindEvents);
function bindEvents(){
    
   document.getElementById("BtnStudent").addEventListener("click",regStudent);
    document.getElementById("BtnTeacher").addEventListener("click",regTeacher);
  // document.getElementById("submitBt").addEventListener("click", doPost);

}
function regStudent(){
    
        var PersonId=document.getElementById("personId").value;
    var PersonName=document.getElementById("Name").value;
    
   if(PersonId.startsWith("S"))
        {  
           // 
         var studentObj=new Student(PersonId,PersonName);
         crudOperations.addStudent(studentObj);
          location.href="StudentScreen.html";
            
            alert("you are logged in as a student");
        }
else{

alert("wrong credentials");
}
}
    

function regTeacher(){
    var PersonId=document.getElementById("personId").value;
    var PersonName=document.getElementById("Name").value;
    
   if(PersonId.startsWith("T"))
        {  
           // 
         var teacherObj=new Teacher(PersonId,PersonName);
         crudOperations.addTeacher(teacherObj);
          location.href="TeacherScreen.html";
            
            alert("you are logged in as a teacher");
        }
else{

alert("wrong credentials");
}
}




