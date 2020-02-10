import JepordyController from "./Controllers/jepordyController.js";

class App {
  JepordyController = new JepordyController();
}

window["app"] = new App();
