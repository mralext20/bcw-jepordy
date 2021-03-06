export default class Question {
    constructor(data) {
        this.answer = data.answer
        this.question = data.question
        this.value = data.value
        this.category = data.category.title
        this.id = data.id
    }

    get AnswerTemplate() {
        return /*html*/`
        <h2>${this.answer}</h2>
        <button onclick="app.JepordyController.answerRight()">correct!</button>
        <button onclick="app.JepordyController..answerWrong()">Wrong!</button>

        `
    }

    get questionTemplate() {
        return /*html*/`
        <h3>${this.question}</h3>
        <h2>${this.value}</h2>
        `
    }
}