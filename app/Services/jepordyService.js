import store from "../store.js";
import Question from "../Models/question.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "http://jservice.io/api/"
})

class JepordyService {
  getQuestion() {
    _api.get("random").then(res => {
      let question = res.data[0]
      let quest = new Question(question)
      store.commit('question', quest)
    }).catch(res => console.log(res))
  }
  answerRight() {
    let newScore = store.State.score + store.State.question.value
    store.commit('score', newScore)
  }
  answerWrong() {
    let newScore = store.State.score - store.State.question.value

    store.commit('score', newScore)

  }
}

const service = new JepordyService();
export default service;
