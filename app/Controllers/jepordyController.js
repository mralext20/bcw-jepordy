import JepordyService from "../Services/jepordyService.js";
import store from "../store.js";

//Private
let target = document.getElementById("target")
function _draw() {
  let question = store.State.question;
  console.log(question);
  target.innerHTML = question.questionTemplate
}
function _drawAnswer() {
  let question = store.State.question;
  target.innerHTML = question.AnswerTemplate
}


//Public
export default class JepordyController {
  constructor() {
    store.subscribe("question", _draw);
    JepordyService.getQuestion();
  }
  showAnswer() {
    _drawAnswer()
  }

  nextQuestion() {
    JepordyService.getQuestion()
  }

}
