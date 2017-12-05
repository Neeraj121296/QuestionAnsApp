const MatchOperation = {
count:0,
    matchAnswer(ArrayObject, checkAnswerListObj) {

        console.log(checkAnswerListObj);
        console.log(ArrayObject);
      for (i = 0; i < ArrayObject.length; i++) {
            if ((ArrayObject[i].answer).toLowerCase()==(checkAnswerListObj[i].checkanswer).toLowerCase()){
                
             this.count++;
              console.log(this.count);  
            }
      }

        },


    


    loadAnswer() {
        //var checkAnswerListObj= crudOperations.checkanswerList;
        if (localStorage) {
            if (localStorage.AnswerList && localStorage.checkAnswerList) {

                var ArrayObject = JSON.parse(localStorage.AnswerList);

                var checkAnswerListObj = JSON.parse(localStorage.checkAnswerList);
                MatchOperation.matchAnswer(ArrayObject, checkAnswerListObj);
            } else {
                alert("nothing to load...");
            }
        } else {
            alert("outdated browser...");
        }

    }







}
