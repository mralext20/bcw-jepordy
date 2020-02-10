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
}

const service = new JepordyService();
export default service;
