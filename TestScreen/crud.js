const crudOperations = {
    checkanswerList:[],
	teacherList:[],
	studentList:[],
    quesId:1,
    ansId:1,
    QuestionsList:[],
    AnswerList:[],
    stId:1,
    checkanswerId:1,
    timeLimit:0,
    
    addcheckAnswer(checkanswer){
var checkanswerObject=new CheckAnswer(this.checkanswerId,checkanswer);
    this.checkanswerList.push(checkanswerObject);
        this.checkanswerId++;
    },
	addTeacher(id,name){
		var teacherObject = new Teacher(id, name);
		this.teacherList.push(teacherObject);
	
	},
	addQuestion(questValue,option1,option2,option3,option4){
        var questObject=new Questions(this.quesId,questValue,option1,option2,option3,option4);
        this.QuestionsList.push(questObject);
        this.quesId++;
        
        
    },
addAnswer(answer){
    var ansObject=new Answer(this.ansId,answer);
    this.AnswerList.push(ansObject);
    this.ansId++;
    
},
    addStudent(stId,name){
		var studentObject = new Student(stId, name);
		this.studentList.push(studentObject);
		
	}

}